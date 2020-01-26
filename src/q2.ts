const isAnagramWithObj = (s1: string, s2: string): boolean => {
  const obj = {};
  s1.toLowerCase()
    .split('')
    .forEach(c => {
      obj[c] = obj[c] ? obj[c] + 1 : 1;
    });
  s2.toLowerCase()
    .split('')
    .forEach(c => {
      if (!obj[c]) obj[c] = 0;
      obj[c] -= 1;
    });
  return !Object.values(obj).find(e => e !== 0);
};

const isAnagramWithArray = (s1: string, s2: string): boolean =>
  s1
  .split('')
  .sort()
  .join() ===
  s2
    .split('')
    .sort()
    .join();

export default { isAnagramWithObj, isAnagramWithArray };
