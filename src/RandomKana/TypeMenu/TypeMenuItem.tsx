import { useSetRecoilState } from 'recoil';
import { answerIsShowingState, DisplayType, displayTypeState } from '../atoms';

interface Props {
    label: string;
    active?: boolean;
    type: DisplayType;
}

export const TypeMenuItem = ({ label, active, type }: Props) => {
    const setDisplayType = useSetRecoilState(displayTypeState);
    const setShowAnswer = useSetRecoilState(answerIsShowingState);

    const menuItemClick = () => {
        setDisplayType(type);
        setShowAnswer(false);
    };

    return (
        <div
            className={`cursor-pointer bg-white py-2 px-4 rounded-lg transition`}
            style={{ background: active ? '#58b4ff' : 'white' }}
            onClick={() => menuItemClick()}
        >
            {label}
        </div>
    );
};
