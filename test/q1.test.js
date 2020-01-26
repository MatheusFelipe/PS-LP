const {
  default: { findMinInt },
} = require('../lib/q1');

describe('findMinInt', () => {
  it('should return smallest non-negative integer not present in the array', () => {
    expect.assertions(3);
    const arrs = [
      [1, 2, 3],
      [5, 1, 3],
      [2, 3, 4, -10],
    ];
    expect(findMinInt(arrs[0])).toBe(4);
    expect(findMinInt(arrs[1])).toBe(2);
    expect(findMinInt(arrs[2])).toBe(1);
  });
});
