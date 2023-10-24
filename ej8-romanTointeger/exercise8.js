function romanTointeger(specificRomanNumber){
   //Crear los numeros romanos con sus valores mediante un objeto
   const romanNumbers = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
   }

   const separateRomanNumbers = [...specificRomanNumber.split('')];
   for(let i = 0; i < specificRomanNumber.length; i++){
        if(separateRomanNumbers[i] in romanNumbers){
            separateRomanNumbers[i] = romanNumbers[separateRomanNumbers[i]]; 
        }
    }
    
    for(let i = 0; i < specificRomanNumber.length; i++){
        if(separateRomanNumbers[i] < separateRomanNumbers[i + 1]){
            separateRomanNumbers[i] = separateRomanNumbers[i + 1] - separateRomanNumbers[i];
            separateRomanNumbers.splice(i + 1, 1);
            
        }
    }
    const total = separateRomanNumbers.reduce((total,actualNumber) => total + actualNumber, 0)
    return total
}

const romanNumber = "MCMXCIV";
const integerResult = romanTointeger(romanNumber);
console.log(integerResult)
