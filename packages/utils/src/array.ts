export const reorder = <T>(arr: T[], startIndex: number, endIndex: number) => {
  const result = Array.from(arr);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export const nonUnique = <T>(array: T[]) => {
  return array.filter(
    (item) => array.indexOf(item) === array.lastIndexOf(item)
  );
};
