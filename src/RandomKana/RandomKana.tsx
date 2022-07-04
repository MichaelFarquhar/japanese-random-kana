import { alphabet } from './alphabet';
import { toHiragana, toKatakana } from 'wanakana';
import { useState } from 'react';
import { TypeMenu } from './TypeMenu';
import { AnswerBox } from './AnswerBox';
import './RandomKana.scss';

// Recoil
import { useRecoilState, useRecoilValue } from 'recoil';
import { DisplayType, answerIsShowingState, displayTypeState } from './atoms';

export const RandomKana = () => {
    const displayType = useRecoilValue(displayTypeState);
    const [showAnswer, setShowAnswer] = useRecoilState(answerIsShowingState);

    function get_random(list: Array<string>) {
        return list[Math.floor(Math.random() * list.length)];
    }

    const [char, setChar] = useState(get_random(alphabet));

    const areaClick = () => {
        if (showAnswer) {
            setChar(get_random(alphabet));
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
                <AnswerBox char={char} />
            </div>
        </main>
    );
};
