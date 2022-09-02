export const average = (...values: number[]) => {
  return values.reduce((acc, value) => acc + value, 0) / values.length;
};

export const minMax = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};
