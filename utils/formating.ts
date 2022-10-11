export const returnCapitalizedFirstLetter = (word: string): string => {
  if (!word) return '';

  const contains = /[^\u0000-\u00ff]/.test(word);

  if (contains) return word[0];

  return word[0].toUpperCase();
};
