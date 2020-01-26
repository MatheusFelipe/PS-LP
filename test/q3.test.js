const {
  default: { minContiguousSum },
} = require('../lib/q3');

describe('minContiguousSum', () => {
  it('should return first contiguous subarray with minimum sum, sum < 0', () => {
    expect.assertions(3);
    const arrs = [
      [-2, 1, -1, 4, -4, 3, -5],
      [3, 2, 1, 0],
      [-10, 10, -5, -5, 20],
    ];
    expect(minContiguousSum(arrs[0])).toStrictEqual([-4, 3, -5]);
    expect(minContiguousSum(arrs[1])).toStrictEqual([]);
    expect(minContiguousSum(arrs[2])).toStrictEqual([-10]);
  });
});
