import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { message, sessionId, location } = body;

    // ===== INÍCIO DA LINHA DE DEPURAÇÃO (INSPEÇÃO 2) =====
    console.log("BACKEND RECEBEU - Message:", message, "Session ID:", sessionId, "Location:", location);
    // ===== FIM DA LINHA DE DEPURAÇÃO =====

    if (!message || !sessionId) {
      return NextResponse.json({ error: 'Mensagem e Session ID são obrigatórios' }, { status: 400 });
    }

    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!n8nWebhookUrl) {
        throw new Error("A URL do webhook do n8n não está configurada.");
    }

    let urlCompleta = `${n8nWebhookUrl}?pergunta=${encodeURIComponent(message)}&userID=${sessionId}`;
    if (location) {
      urlCompleta += `&lat=${location.latitude}&lon=${location.longitude}`;
    }

    const n8nResponse = await fetch(urlCompleta);
    const n8nData = await n8nResponse.json();
    
    // Lógica para extrair a resposta final
    let respostaFinal = {
      reply: "Desculpe, a resposta veio em um formato inesperado.",
      mapUrl: null
    };
    let dadosParaAnalisar = n8nData;

    if (Array.isArray(n8nData) && n8nData.length > 0) {
      dadosParaAnalisar = n8nData[0];
    }
    if (dadosParaAnalisar && dadosParaAnalisar.reply) {
      respostaFinal.reply = dadosParaAnalisar.reply;
    }
    if (dadosParaAnalisar && dadosParaAnalisar.mapUrl) {
      respostaFinal.mapUrl = dadosParaAnalisar.mapUrl;
    }
    
    return NextResponse.json(respostaFinal);

  } catch (error) {
    console.error('Erro na API do chat:', error);
    return NextResponse.json({ error: 'Ocorreu um erro ao processar sua mensagem.' }, { status: 500 });
  }
}