// app/hooks/useBluetoothPrinter.js
'use client';

import { useState, useCallback } from 'react';

// UUIDs comuns para serviços e características de impressoras térmicas.
// IMPORTANTE: Estes podem variar! Você talvez precise encontrar os corretos para a sua impressora.
const PRINTER_SERVICE_UUID = '000018f0-0000-1000-8000-00805f9b34fb';
const PRINTER_CHARACTERISTIC_UUID = '00002af1-0000-1000-8000-00805f9b34fb';

export const useBluetoothPrinter = () => {
  const [device, setDevice] = useState(null);
  const [characteristic, setCharacteristic] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState(null);

  // Função para conectar ao dispositivo
  const connect = useCallback(async () => {
    setIsConnecting(true);
    setError(null);
    try {
      console.log('Procurando por impressora Bluetooth...');
      const btDevice = await navigator.bluetooth.requestDevice({
        filters: [{ services: [PRINTER_SERVICE_UUID] }],
        acceptAllDevices: false, // Força a usar o filtro, mais seguro
      });
      
      console.log('Conectando ao GATT Server...');
      const server = await btDevice.gatt.connect();
      
      console.log('Obtendo o serviço de impressão...');
      const service = await server.getPrimaryService(PRINTER_SERVICE_UUID);
      
      console.log('Obtendo a característica de escrita...');
      const char = await service.getCharacteristic(PRINTER_CHARACTERISTIC_UUID);
      
      setDevice(btDevice);
      setCharacteristic(char);
      console.log('✅ Conectado com sucesso!');

    } catch (e) {
      console.error('Falha na conexão:', e);
      setError('Falha ao conectar. Verifique se a impressora está ligada e por perto.');
      setDevice(null);
      setCharacteristic(null);
    } finally {
      setIsConnecting(false);
    }
  }, []);

  // Função para enviar os dados para impressão
  const print = useCallback(async (data) => {
    if (!characteristic) {
      setError('Não há impressora conectada.');
      return;
    }
    try {
      // O dado deve ser um Uint8Array (gerado pelo esc-pos-encoder)
      await characteristic.writeValue(data);
      console.log('Dados enviados para impressão.');
    } catch (e) {
      console.error('Falha ao enviar dados:', e);
      setError('Falha ao enviar dados para a impressora.');
    }
  }, [characteristic]);

  // Função para desconectar
  const disconnect = useCallback(() => {
    if (device && device.gatt.connected) {
      device.gatt.disconnect();
      console.log('Desconectado.');
    }
    setDevice(null);
    setCharacteristic(null);
  }, [device]);

  return {
    connect,
    disconnect,
    print,
    device,
    isConnecting,
    error,
    isConnected: !!device,
  };
};