const findMinInt = arr => {
  if (!Array.isArray(arr)) return null;
  const sorted = arr.sort((a, b) => a - b).filter(e => e > 0);
  if (arr[0] !== 1) return 1;

  const n = sorted.length;
  for (let i = 1; i < n; i += 1) if (arr[i - 1] + 1 < arr[i]) return arr[i - 1] + 1;

  return arr[n - 1] + 1;
};

module.exports = { findMinInt };
