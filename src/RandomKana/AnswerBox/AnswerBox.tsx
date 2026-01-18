import { useEffect } from 'react';
import { useAtomValue } from 'jotai';
import { toHiragana, toKatakana } from 'wanakana';
import { DisplayType, answerIsShowingState, characterState, displayTypeState, soundMutedState } from '../atoms';
import useSpeakJapanese from '../../hooks/useSpeakJapanese';

export const AnswerBox = () => {
  const showAnswer = useAtomValue(answerIsShowingState);
  const char = useAtomValue(characterState);
  const displayType = useAtomValue(displayTypeState);
  const isMuted = useAtomValue(soundMutedState);

  const { speak } = useSpeakJapanese(DisplayType.Hiragana ? toHiragana(char) : toKatakana(char), {
    enabled: !isMuted,
  });

  // Speak when the answer is shown
  useEffect(() => {
    if (showAnswer) {
      speak();
    }
  }, [showAnswer, speak]);

  return (
    <div
      className={`opacity-0 inline text-2xl font-semibold rounded-lg bg-[#d7ffd2] px-4 py-2 ${
        showAnswer ? 'transition opacity-100' : ''
      }`}
    >
      {displayType === DisplayType.Romaji ? `${toHiragana(char)} ${toKatakana(char)}` : char}
    </div>
  );
};
