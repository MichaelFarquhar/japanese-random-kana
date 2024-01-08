import alphabet from './alphabet';
import { choiceFromArray } from './choiceFromArray';
import { toHiragana, toKatakana } from 'wanakana';
import { TypeMenu } from './TypeMenu';
import { AnswerBox } from './AnswerBox';
import './RandomKana.scss';

// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import {
    DisplayType,
    answerIsShowingState,
    displayTypeState,
    characterState,
} from './atoms';

export const RandomKana = () => {
    const displayType = useRecoilValue(displayTypeState);
    const [showAnswer, setShowAnswer] = useRecoilState(answerIsShowingState);

    const [char, setChar] = useRecoilState(characterState);

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
        <main>
            <TypeMenu />
            <div
                className="clickable-area"
                style={{ height: '95%' }}
                onClick={() => areaClick()}
            >
                <p className="help-text">Click anywhere to randomize.</p>
                <h1 className="character">{displayCharacter()}</h1>
                <AnswerBox />
            </div>
        </main>
    );
};
