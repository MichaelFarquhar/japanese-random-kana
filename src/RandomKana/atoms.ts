import { atom } from 'recoil';

export enum DisplayType {
    Hiragana,
    Katakana,
    Romaji,
}

// The current type of character to be shown to the user
export const displayTypeState = atom<DisplayType>({
    key: 'displayTypeState',
    default: DisplayType.Hiragana,
});

// Whether or not the answer is showing for the current character
export const answerIsShowingState = atom<boolean>({
    key: 'answerIsShowingState',
    default: false,
});
