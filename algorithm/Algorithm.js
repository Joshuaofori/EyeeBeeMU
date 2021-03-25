export default class Algorithm {
  static converToBAse(pnumber) {
    const number = pnumber;
    return (number.toString(26));
  }

  static covertToAscii(link) {
    let word = '';
    const numbers = link.replace(/\D/g, ' ').split(/(\s+)/).filter((entry) => /\S/.test(entry));
    for (let i = 0; i < numbers.length; i += 1) {
      word += String.fromCharCode(numbers[i]);
    }
    return word;
  }
}
