import React from 'react';
import { useSpeechRecognition } from 'react-speech-recognition';

export default function VoiceRecognitionButton() {
  const { transcript, resetTranscript, startListening, stopListening, browserSupportsSpeechRecognition } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  
  return (
    <div>
      <button onClick={startListening}>Ativar reconhecimento de voz</button>
      <button onClick={stopListening}>Desativar reconhecimento de voz</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

