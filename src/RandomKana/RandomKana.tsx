import alphabet from './alphabet';
import { choiceFromArray } from './choiceFromArray';
import { toHiragana, toKatakana } from 'wanakana';
import { TypeMenu } from './TypeMenu';
import { AnswerBox } from './AnswerBox';

// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    DisplayType,
    answerIsShowingState,
    displayTypeState,
    characterState,
} from './atoms';
import useSpaceKey from '../hooks/useSpaceKey';

export const RandomKana = () => {
    const displayType = useRecoilValue(displayTypeState);
    const [showAnswer, setShowAnswer] = useRecoilState(answerIsShowingState);

    const [char, setChar] = useRecoilState(characterState);

    useSpaceKey(() => {
        areaClick();
    });

    const areaClick = () => {
        if (showAnswer) {
            setChar(choiceFromArray(alphabet));
            setShowAnswer(false);
        } else {
            setShowAnswer(true);
        }
    };

    const displayCharacter = () => {
        switch (displayType) {
            case DisplayType.Romaji:
                return char;
            case DisplayType.Hiragana:
                return toHiragana(char);
            case DisplayType.Katakana:
                return toKatakana(char);
            default:
                return char;
        }
    };

    return (
        <main className="flex-1 mt-10 text-center select-none w-full">
            <TypeMenu />
            <div
                className="h-['95%'] hover:cursor-pointer"
                style={{ height: '95%' }}
                onClick={() => areaClick()}
            >
                <p className="mt-8 text-gray-500 text-center">
                    Click anywhere or{' '}
                    <kbd className="px-4 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg">
                        Spacebar
                    </kbd>{' '}
                    to randomize.
                </p>
                <h1 className="text-gray-600 font-bold text-[7.5rem] mt-8 mb-2">
                    {displayCharacter()}
                </h1>
                <AnswerBox />
            </div>
        </main>
    );
};
