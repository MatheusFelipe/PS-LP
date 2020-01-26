const {
  default: { isAnagramWithObj, isAnagramWithArray },
} = require('../lib/q2');

describe('isAnagram', () => {
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
