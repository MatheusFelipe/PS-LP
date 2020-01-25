const { isAnagramWithObj, isAnagramWithArray } = require('./q2');

describe('isAnagram', () => {
  it('should return null with invalid parameter', () => {
    expect.assertions(4);
    expect(isAnagramWithObj(1, 2)).toBeNull();
    expect(isAnagramWithObj(null, undefined)).toBeNull();
    expect(isAnagramWithArray(null, '')).toBeNull();
    expect(isAnagramWithArray('onestring')).toBeNull();
  });

  it('should return true if is anagram', () => {
    expect.assertions(2);
    expect(isAnagramWithObj('autor', 'outra')).toBe(true);
    expect(isAnagramWithArray('autor', 'outra')).toBe(true);
  });

  it('should return false if is not anagram', () => {
    expect.assertions(2);
    expect(isAnagramWithObj('autor', 'outrora')).toBe(false);
    expect(isAnagramWithArray('autor', 'outrora')).toBe(false);
  });
});
