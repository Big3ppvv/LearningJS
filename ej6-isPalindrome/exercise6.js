//Palíndromos son palabras o frases que al leerse de izquierda a 
//derecha y viceversa expresan o tienen el mismo sentido.

function isPalindrome(number){
    const palindromeNumber = "";
    const StringNumber = number.toString();
    for(let i = StringNumber.length - 1; i >= 0; i--){
        palindromeNumber += StringNumber[i]; 
    }

    if(palindromeNumber === StringNumber){
        return true;
    }else{
        return false;
    }
    
}

const number = 154;
const verifyPalindrome = isPalindrome(number);
console.log(verifyPalindrome)