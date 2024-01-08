export const choiceFromArray = (array: any[]) => {
    return array[Math.floor(Math.random() * array.length)];
};