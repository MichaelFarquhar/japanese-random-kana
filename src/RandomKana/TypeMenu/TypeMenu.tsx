import React from 'react';
import { useRecoilValue } from 'recoil';
import { DisplayType, displayTypeState } from '../atoms';
import { TypeMenuItem } from './TypeMenuItem';

export const TypeMenu = () => {
    const displayType = useRecoilValue(displayTypeState);

    return (
        <React.Fragment>
            <div
                className="flex justify-center gap-4 w-max mx-auto"
                data-component="type-menu"
            >
                <TypeMenuItem
                    label="Hiragana"
                    type={DisplayType.Hiragana}
                    active={displayType === DisplayType.Hiragana}
                />
                <TypeMenuItem
                    label="Katakana"
                    type={DisplayType.Katakana}
                    active={displayType === DisplayType.Katakana}
                />
                <TypeMenuItem
                    label="Romaji"
                    type={DisplayType.Romaji}
                    active={displayType === DisplayType.Romaji}
                />
            </div>
        </React.Fragment>
    );
};
