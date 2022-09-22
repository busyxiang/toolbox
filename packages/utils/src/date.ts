export const findDateMinMax = (...dates: Date[]) => {
  const dateTimes = dates.map((d) => d.getTime());

  const min = Math.min(...dateTimes);
  const max = Math.max(...dateTimes);

  return { min: new Date(min), max: new Date(max) };
};
