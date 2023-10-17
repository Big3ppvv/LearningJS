//Palíndromos son palabras o frases que al leerse de izquierda a 
//derecha y viceversa expresan o tienen el mismo sentido.

function isPalindrome(number){
  let numberOfDigits = Math.floor(Math.log10(number) + 1);
  let divisorNumber = Math.pow(10, numberOfDigits - 1);
  let palindromeNumber = Math.floor(number / divisorNumber);
  number = number - palindromeNumber * divisorNumber;

}
const number = 154;
isPalindrome(number);