export default class Algorithm {
  static converToBAse(pnumber) {
    const number = pnumber;
    return (number.toString(26));
  }

  static replaceRange(s, start, end, substitute) {
    return s.substring(0, start) + substitute + s.substring(end);
  }

  static covertToAscii(link) {
    let word = '';
    const numbers = link.replace(/\D/g, ' ').split(/(\s+)/).filter((entry) => /\S/.test(entry));
    for (let i = 0; i < numbers.length; i += 1) {
      word += String.fromCharCode(numbers[i]);
    }
    const first = link.indexOf(numbers[0]);
    const last = link.indexOf(numbers[numbers.length - 1]) + numbers[numbers.length - 1].length;
    return this.replaceRange(link, first, last, word);
  }
}
