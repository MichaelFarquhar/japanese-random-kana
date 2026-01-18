import { useEffect, useCallback, useRef } from 'react';

type UseSpeakJapaneseOptions = {
  enabled?: boolean;
  rate?: number;
  pitch?: number;
  volume?: number;
};

const useSpeakJapanese = (
  text: string,
  options: UseSpeakJapaneseOptions = {}
) => {
  const { enabled = true, rate = 0.8, pitch = 1, volume = 1 } = options;
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback(() => {
    if (!enabled || !text || typeof window === 'undefined') return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ja-JP';
    utterance.rate = rate;
    utterance.pitch = pitch;
    utterance.volume = volume;

    // Try to find a Japanese voice
    const voices = window.speechSynthesis.getVoices();
    const japaneseVoice = voices.find(
      (voice) => voice.lang === 'ja-JP' || voice.lang.startsWith('ja')
    );
    if (japaneseVoice) {
      utterance.voice = japaneseVoice;
    }

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [text, enabled, rate, pitch, volume]);

  const cancel = useCallback(() => {
    window.speechSynthesis.cancel();
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return { speak, cancel };
};

export default useSpeakJapanese;
