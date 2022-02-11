module.exports = {
  createCipher: (str) => {
    let cipher = [];
    let directionArr = ['u', 'd'];
    let encodedCharArr = [];
    let newCharCode;
  
    for(let letter in str) {
      let randomNum = Math.floor((Math.random() * 11));
      let randomDir = directionArr[Math.floor(Math.random() * 2)];
        
      let cipherValue;
      // cipher.push(cipherValue);
      let charCode = str.charCodeAt(letter);
   
      if(randomDir === "u") {
        if(charCode + randomNum === 92 || charCode + randomNum === 96) {
          randomNum += 1
          newCharCode = charCode + randomNum
        }
        else if(charCode + randomNum <= 126) {
          newCharCode = charCode + randomNum;
          
        } else {
          newCharCode = 126;
          randomNum = 126 - charCode;
         }
         encodedCharArr.push(newCharCode);
       
      } else if (randomDir === "d") {
        if(charCode - randomNum === 92 || charCode - randomNum === 96) {
          randomNum -= 1
          newCharCode = charCode - randomNum
        }
        else if(charCode - randomNum >= 32) {
          newCharCode =  charCode - randomNum;
          
        } else {
          newCharCode = 32;
          randomNum = charCode - 32;
         }
         encodedCharArr.push(newCharCode);
         
      }
      
      cipherValue = randomNum + '-' + randomDir
      cipher.push(cipherValue);
      
    }
   const encodedTextArr = [];

    encodedCharArr.forEach(elem => {
  
    encodedTextArr.push(String.fromCharCode(elem))
  
    })
    
   return cipher;
  },
  encrptStr: (str, arr) => {
    let cipher = [];
    let directionArr = ['u', 'd'];
    let encodedCharArr = [];
    let newCharCode;
  
    for(let letter in str) {
      let randomNum = parseInt(arr[letter])
      let randomDir = arr[letter].split('-')[1];
        
      let cipherValue;
      // cipher.push(cipherValue);
      let charCode = str.charCodeAt(letter);
   
      if(randomDir === "u") {
        if(charCode + randomNum === 92 || charCode + randomNum === 96) {
          randomNum += 1
          newCharCode = charCode + randomNum
        }
        else if(charCode + randomNum <= 126) {
          newCharCode = charCode + randomNum;
          
        } else {
          newCharCode = 126;
          randomNum = 126 - charCode;
         }
         encodedCharArr.push(newCharCode);
       
      } else if (randomDir === "d") {
        if(charCode - randomNum === 92 || charCode - randomNum === 96) {
          randomNum -= 1
          newCharCode = charCode - randomNum
        }
        else if(charCode - randomNum >= 32) {
          newCharCode =  charCode - randomNum;
          
        } else {
          newCharCode = 32;
          randomNum = charCode - 32;
         }
         encodedCharArr.push(newCharCode);
         
      }
      
      cipherValue = randomNum + '-' + randomDir
      cipher.push(cipherValue);
      
    }
   const encodedTextArr = [];
    
    encodedCharArr.forEach(elem => {
  
    encodedTextArr.push(String.fromCharCode(elem))
  
    })
    
   return encodedTextArr.join('');
  },
  decodeStr: (arr, str) => {

    let number;
    const decodedArr = [];
  
    for (let i = 0; i < arr.length; i++) {
       number = parseInt(arr[i]);
   
     let charCode = str.charCodeAt(i);
     
      if(arr[i].includes('u')) {
  
         charCode -= number
        decodedArr.push(charCode);
       } else if(arr[i].includes('d')) {
  
         charCode += number
         decodedArr.push(charCode);
      }
  
    }
    
    const decodedText = String.fromCharCode(...decodedArr)
    return decodedText
  }
}