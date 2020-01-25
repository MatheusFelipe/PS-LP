const minContiguousSum = arr => {
  if (!Array.isArray(arr)) return null;
  let [start, end, j, min, minNow] = [0, 0, 0, 0, 0];
  for (let [i, n] = [0, arr.length]; i < n; i += 1) {
    minNow += arr[i];
    if (min > minNow) {
      min = minNow;
      start = j;
      end = i;
    }
    if (minNow > 0) {
      minNow = 0;
      j = i + 1;
    }
  }
  if (min >= 0) return [];
  return arr.slice(start, end + 1);
};

module.exports = { minContiguousSum };
