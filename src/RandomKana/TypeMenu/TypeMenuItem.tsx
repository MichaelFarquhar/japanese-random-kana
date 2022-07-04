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
            className={`type-menu__item ${active ? 'type-menu__item--active' : ''}`}
            onClick={() => menuItemClick()}
        >
            {label}
        </div>
    );
};
