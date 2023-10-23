function isPalindrome(number){
  if(number < 0){
    return false
  }
  //Evaluar la cantidad de digitos que tiene
  let numberOfDigits = Math.floor(Math.log10(number) + 1);

  //Iterar sobre la cantidad de digitos
  let repetedLoop = 0 ;
  let decreasedNumber
  while(repetedLoop < numberOfDigits ){
    /* Elevar el 10 segun la cantidad de digitos para dividir el numero 
    y disminuirlo poco a poco */
    let divisorNumber = Math.pow(10, numberOfDigits - 1);
    let numbersOneByOne = Math.floor(number / divisorNumber);
    decreasedNumber = number - numbersOneByOne * divisorNumber;
    numberOfDigits--
  }
  if(decreasedNumber === 0){
    return true
  }
}

const number = 897;
const verifyPalindrome = isPalindrome(number);
console.log(verifyPalindrome);