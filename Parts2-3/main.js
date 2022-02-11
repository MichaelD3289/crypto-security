const func = require('./controller');

let StrToEncrpt = `I love cryptography!`;


const cipher = func.createCipher(StrToEncrpt);
const encodedText = func.encrptStr(StrToEncrpt, cipher);
const decodedText = func.decodeStr(cipher, encodedText);

console.log(cipher);
console.log(encodedText);
console.log(decodedText);
