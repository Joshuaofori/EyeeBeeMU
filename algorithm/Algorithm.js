// eslint-disable-next-line max-len
export const replaceRange = (s, start, end, substitute) => s.substring(0, start) + substitute + s.substring(end);

export const covertToAscii = (link) => {
  let word = '';
  const numbers = link.replace(/\D/g, ' ').split(/(\s+)/).filter((entry) => /\S/.test(entry));
  for (let i = 0; i < numbers.length; i += 1) {
    word += String.fromCharCode(numbers[i]);
  }
  const first = link.indexOf(numbers[0]);
  const last = link.indexOf(numbers[numbers.length - 1]) + numbers[numbers.length - 1].length;
  return this.replaceRange(link, first, last, word);
};

export const resolveX = (nextDecimals) => {
  let result = '';
  let quotient = nextDecimals;
  while (quotient >= 1) {
    const remainder = quotient % 26;
    quotient = Math.floor(quotient / 26);
    result += remainder.toString(26).toUpperCase();
  }
  return result.split('').reverse().join('');
};
