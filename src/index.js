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

let inputArr = [];
for (let i = 0; i < expr.length; i += 10) { //cut input string into pieces for 10 characters 
  inputArr.push(expr.substr(i,10));
}
  let morse = [];
  
  for (let i = 0; i < inputArr.length; i++) { //look through every letter and transform in "." , "-" and " " 
    let letter = '';
    for (let j = 0; j < inputArr[i].length; j += 2) {
      if (inputArr[i][j] ==='0') {
        continue;
      } else if (inputArr[i][j] ==='*') {
        letter = ' ';
        break;            
      } else if (inputArr[i][j+1] ==='0') {
        letter += '.';
      } else if (inputArr[i][j+1] ==='1') {
        letter += '-';
      } else {
        letter = '';
      }   
    }
    morse.push(letter); //contain all letter in ".-" form here
  }
  let answer = '';
  for (let i = 0; i < morse.length; i++) { //decoded letters from morse table
    if (MORSE_TABLE[morse[i]]) {
      answer += MORSE_TABLE[morse[i]];
    } else {
      answer += ' ';
    }
    
  }
  return answer;

}
module.exports = {
    decode
}