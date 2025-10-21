import { atom } from 'jotai';
import { choiceFromArray } from './choiceFromArray';
import alphabet from './alphabet';

export enum DisplayType {
  Hiragana,
  Katakana,
  Romaji,
}

// The current type of character to be shown to the user
export const displayTypeState = atom<DisplayType>(DisplayType.Hiragana);

// Whether or not the answer is showing for the current character
export const answerIsShowingState = atom<boolean>(false);

// Random character selected from alphabet
export const characterState = atom<string>(choiceFromArray(alphabet));
