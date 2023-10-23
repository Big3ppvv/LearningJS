function isPalindrome(number){
  //Evaluar si es negativo

  if(number < 0){
    return false
  }
  //Evaluar la cantidad de digitos que tiene
  let numberOfDigits = Math.floor(Math.log10(number) + 1);
  /* Elevar el 10 segun la cantidad de digitos para dividir el numero 
  y disminuirlo poco a poco */
  let divisorNumber = Math.pow(10, numberOfDigits - 1);
  let numbersOneByOne = Math.floor(number / divisorNumber);
  let decreasedNumber = number - numbersOneByOne * divisorNumber;

  //Iterar sobre la cantidad de digitos

  for(let i = 0; i <= numberOfDigits; i++){
    isPalindrome(decreasedNumber);
  }
}
const number = 342;
const verifyPalindrome = isPalindrome(number);
console.log(verifyPalindrome);
