import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { message, sessionId } = body;

    if (!message || !sessionId) {
      return NextResponse.json({ error: 'Mensagem e Session ID são obrigatórios' }, { status: 400 });
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!n8nWebhookUrl) {
        throw new Error("A URL do webhook do n8n não está configurada.");
    }

    const urlCompleta = `${n8nWebhookUrl}?pergunta=${encodeURIComponent(message)}&userID=${sessionId}`;

    const n8nResponse = await fetch(urlCompleta);
    const n8nData = await n8nResponse.json();

    // --- INÍCIO DA CORREÇÃO FINAL E ROBUSTA ---

    let respostaFinal = "Desculpe, a resposta veio em um formato inesperado.";
    let dadosParaAnalisar = n8nData;

    // Se o n8n enviar um array (como ele mostra no painel), pegamos o primeiro objeto de dentro.
    if (Array.isArray(n8nData) && n8nData.length > 0) {
      dadosParaAnalisar = n8nData[0];
    }

    // Agora, 'dadosParaAnalisar' é garantidamente um objeto.
    // Verificamos se ele tem a chave 'reply' que criamos no n8n.
    if (dadosParaAnalisar && dadosParaAnalisar.reply) {
      respostaFinal = dadosParaAnalisar.reply;
    }
    
    // --- FIM DA CORREÇÃO ---

    return NextResponse.json({ reply: respostaFinal });

  } catch (error) {
    console.error('Erro na API do chat:', error);
    return NextResponse.json({ error: 'Ocorreu um erro ao processar sua mensagem.' }, { status: 500 });
  }
}
