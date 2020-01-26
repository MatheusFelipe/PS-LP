const findMinInt = (arr: number[]): number => {
  const sorted = arr.sort((a, b) => a - b).filter(el => el > 0);
  if (arr[0] !== 1) return 1;
  const len = sorted.length;
  for (let i = 1; i < len; i += 1) if (arr[i - 1] + 1 < arr[i]) return arr[i - 1] + 1;
  return arr[len - 1] + 1;
};

export default { findMinInt };
