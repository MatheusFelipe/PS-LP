const { findMinInt } = require('./q1');

describe('findMinInt', () => {
  it('should return null with invalid parameter', () => {
    expect.assertions(5);
    expect(findMinInt(1)).toBeNull();
    expect(findMinInt('')).toBeNull();
    expect(findMinInt({ id: 1 })).toBeNull();
    expect(findMinInt(null)).toBeNull();
    expect(findMinInt(undefined)).toBeNull();
  });

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
