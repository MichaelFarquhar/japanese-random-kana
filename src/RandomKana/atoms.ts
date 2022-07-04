import { atom } from 'recoil';
import { getRandomCharacter } from './alphabet';

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

// Random character selected from alphabet
export const characterState = atom<string>({
    key: 'characterState',
    default: getRandomCharacter(),
});
