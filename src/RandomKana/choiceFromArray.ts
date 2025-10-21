export const choiceFromArray = (array: any[]): string => {
  return array[Math.floor(Math.random() * array.length)];
};
