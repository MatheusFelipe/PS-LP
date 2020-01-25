const { nOrderGrayCode } = require('./q4');

describe('minContiguousSum', () => {
  it('should return null with invalid parameter', () => {
    expect.assertions(4);
    expect(nOrderGrayCode(0)).toBeNull();
    expect(nOrderGrayCode(null)).toBeNull();
    expect(nOrderGrayCode(undefined)).toBeNull();
    expect(nOrderGrayCode('string')).toBeNull();
  });

  it('should return first contiguous subarray with minimum sum, sum < 0', () => {
    expect.assertions(3);
    const arrs = [2, 3, 4];
    expect(nOrderGrayCode(arrs[0])).toStrictEqual('00, 01, 11, 10');
    expect(nOrderGrayCode(arrs[1])).toStrictEqual('000, 001, 011, 010, 110, 111, 101, 100');
    expect(nOrderGrayCode(arrs[2])).toStrictEqual(
      '0000, 0001, 0011, 0010, 0110, 0111, 0101, 0100, 1100, 1101, 1111, 1110, 1010, 1011, 1001, 1000'
    );
  });
});
