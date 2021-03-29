import { getPiNumber, getQRCodeUrl, getLinkValue } from '../API';

// eslint-disable-next-line max-len
const replaceRange = (s, start, end, substitute) => s.substring(0, start) + substitute + s.substring(end);

const convertToASCII = (link) => {
  let word = '';
  const numbers = link.replace(/\D/g, ' ').split(/(\s+)/).filter((entry) => /\S/.test(entry));
  for (let i = 0; i < numbers.length; i += 1) {
    word += String.fromCharCode(numbers[i]);
  }
  const first = link.indexOf(numbers[0]);
  const last = link.indexOf(numbers[numbers.length - 1]) + numbers[numbers.length - 1].length;
  return replaceRange(link, first, last, word);
};

export const resolveX = async () => {
  const nextDecimals = await getPiNumber('036695');
  let result = '';
  let quotient = nextDecimals;
  while (quotient >= 1) {
    const remainder = quotient % 26;
    quotient = Math.floor(quotient / 26);
    result += remainder.toString(26).toUpperCase();
  }
  return result.split('').reverse().join('');
};

export const resolveY = async () => {
  const newLink = convertToASCII('https://pasteboard.co/074 065 051 049 084 077 048 046 112 110 103/');
  const qrCodeLink = await getQRCodeUrl(newLink);
  const y = await getLinkValue(qrCodeLink);
  return y;
};

export const resolveZ = () => 'J3M2+M2 Lille';
