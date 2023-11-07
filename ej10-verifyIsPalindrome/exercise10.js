function isPalindrome(number){
  if(number < 0){
    return false
  }
  
  //Evaluar la cantidad de digitos que tiene
  const numberOfDigits = Math.floor(Math.log10(number) + 1);
  const half = Math.floor(numberOfDigits / 2);
  //Iterar sobre la cantidad de digitos
  for(let i = 0; i < half; i++){
    console.log(Math.pow(10, numberOfDigits - i - 1))
    const left = Math.floor(number / Math.pow(10, numberOfDigits - i - 1)) % 10;
    const right = Math.floor( number/ Math.pow(10, i)) % 10;
    if (left !== right) {
      return false;
    }
    return true; 
  }
  
}

const number = 897;
const verifyPalindrome = isPalindrome(number);
console.log(verifyPalindrome);