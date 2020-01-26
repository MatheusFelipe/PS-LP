const nOrderGrayCode = (n: number): string => {
  if (n <= 0) return '';
  let gray = ['0', '1'];
  for (let i = 1; i < n; i += 1) {
    const simmetric = [...gray].reverse();
    gray = gray.map(e => `0${e}`).concat(simmetric.map(e => `1${e}`));
  }
  return gray.join(', ');
};

export default { nOrderGrayCode };
