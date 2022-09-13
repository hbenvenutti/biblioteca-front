export const capitalize = (str: string): string => {
  return str.replace(/^\w/, c => c.toUpperCase());
}

export const capitalizeMany = (str: string): string => {
  const words = str.split(' ');
  return words.map(string => string.replace(/^\w/, c => c.toUpperCase())).join(' ');
}
