import { useRecoilValue } from 'recoil';
import { toHiragana, toKatakana } from 'wanakana';
import {
    DisplayType,
    answerIsShowingState,
    characterState,
    displayTypeState,
} from '../atoms';

export const AnswerBox = () => {
    const showAnswer = useRecoilValue(answerIsShowingState);
    const char = useRecoilValue(characterState);
    const displayType = useRecoilValue(displayTypeState);

    return (
        <div className={`answer ${showAnswer ? 'show' : ''}`}>
            {displayType === DisplayType.Romaji
                ? `${toHiragana(char)} ${toKatakana(char)}`
                : char}
        </div>
    );
};
