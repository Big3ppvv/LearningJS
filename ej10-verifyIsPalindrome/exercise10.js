//Palíndromos son palabras o frases que al leerse de izquierda a 
//derecha y viceversa expresan o tienen el mismo sentido.

function isPalindrome(number){
  numberOfDigits = Math.floor(Math.log10(number) + 1);
  switch(numberOfDigits){
    case 2:
        var divisionNumber = 10;
        return divisionNumber;
    case 3:
        var divisionNumber = 100;
        return divisionNumber;
    case 4:
        var divisionNumber = 1000;
        return divisionNumber;
    case 5:
        var divisionNumber = 10000;
        return divisionNumber;
    case 6:
        var divisionNumber = 100000;
        return divisionNumber;
    case 7:
        var divisionNumber = 1000000;
        return divisionNumber;
  }

}

const number = 154;
isPalindrome(number);