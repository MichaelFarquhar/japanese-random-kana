import { useAtomValue } from 'jotai';
import { toHiragana, toKatakana } from 'wanakana';
import { DisplayType, answerIsShowingState, characterState, displayTypeState } from '../atoms';

export const AnswerBox = () => {
  const showAnswer = useAtomValue(answerIsShowingState);
  const char = useAtomValue(characterState);
  const displayType = useAtomValue(displayTypeState);

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
