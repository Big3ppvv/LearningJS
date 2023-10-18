//Palíndromos son palabras o frases que al leerse de izquierda a 
//derecha y viceversa expresan o tienen el mismo sentido.

function isPalindrome(number){
  while(number !== 0){
    let numberOfDigits = Math.floor(Math.log10(number) + 1);
    let divisorNumber = Math.pow(10, numberOfDigits - 1);
    let decreaseNumber = Math.floor(number / divisorNumber);
    number = number - decreaseNumber * divisorNumber;
    if(number === 0){
      return "Is Palidnrome";
      
    }else{
      isPalindrome(number);
    }

  }
}

const number = 9882;
const verifyPalindrome = isPalindrome(number);
console.log(verifyPalindrome);
