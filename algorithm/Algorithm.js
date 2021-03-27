export default class Algorithm {
  Algorithm() {
    this.linkvalue = '';
  }

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

  static decodeImage() {
    fetch('https://pasteboard.co/JA31TM0.png/')
      .then((response) => response.blob())
      .then((myBlob) => {
        console.log(myBlob.length);
      })
      .catch((error) => {
        // ADD THIS THROW error
        throw error;
      });
  }

  static fetchLink(link) {
    const BreakException = {};
    try {
      fetch(link)
        .then((response) => response.text())
        .then((data) => {
        // eslint-disable-next-line global-require
          const DomParser = require('dom-parser');
          const parser = new DomParser();
          const doc = parser.parseFromString(data, 'text/html');
          this.linkvalue = doc.getElementsByClassName('item center')[0].innerHTML;
          // console.log(this.linkvalue);
          if (this.linkvalue !== '') throw BreakException;
        })
        .catch((error) => {
        // ADD THIS THROW error
          console.log(error);
        });
    } catch (e) {
      if (e !== BreakException) {
        console.log(e);
      }
    }
    return this.linkvalue;
  }

  static findPassword(var1, var2) {
    return (`${this.converToBAse(var1) + this.fetchLink(var2)} Lille`);
  }
}
