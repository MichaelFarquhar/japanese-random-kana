import { useRecoilValue } from 'recoil';
import { answerIsShowingState } from '../atoms';

interface Props {
    char: string;
}

export const AnswerBox = ({ char }: Props) => {
    const showAnswer = useRecoilValue(answerIsShowingState);

    return <div className={`answer ${showAnswer ? 'show' : ''}`}>{char}</div>;
};
