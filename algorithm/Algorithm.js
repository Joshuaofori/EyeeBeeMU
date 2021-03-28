/* eslint-disable import/prefer-default-export */
import { getNumberBaseApi } from './api';

export const gettingNumber = async (pnumber) => {
  await getNumberBaseApi(pnumber);
};
export const converToBAse = (number) => {
  // console.log(number.toString(26));
  (number.toString(26));
};

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
