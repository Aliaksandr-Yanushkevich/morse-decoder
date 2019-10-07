const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
// MY CODE BELOW
    let str = '000000001100101010100000000010**********';
    let inputArr = [];
    for (let i = 0; i < str.length; i += 10) {
      inputArr.push(str.substr(i,10));
    }
    console.log(inputArr);
    function decoder(inputArr) {
      let str = '';
      let morse = [];
      
      for (let i = 0; i < inputArr.length; i++) {
        for (let j = 0; j < inputArr[i].length; j += 2) {
          let letter = '';
          switch(inputArr[i][j]) {
            case '0':
              break;
            case '*':
              morse.push(' ');
              j += 10;
              break;
            case '1':
              for (let n = j; n < inputArr[i].length; n += 2) {
                if (inputArr[i][n+1] === '0') {
                  letter += '.';
                } else if (inputArr[i][n+1] === '1') {
                  letter += '-';
                }
              }
          morse.push(letter);
          console.log('i = ' + i +' j=' + j);
          console.log('letter=' + letter);
          break;
          }
        }
      }
    }
    console.log(decoder(inputArr));

    
}
// MY CODE ABOVE
module.exports = {
    decode
}