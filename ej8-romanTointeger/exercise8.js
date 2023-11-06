const MAP_VALUES = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

function romanTointeger(romanNumber){
  //Crear los numeros romanos con sus valores mediante un objeto

  const separateRomanNumbers = romanNumber.split('');
  const parsedValues = separateRomanNumbers.map((stringNumber) =>{
    if(!(stringNumber in MAP_VALUES))throw new Error("Invalid roman number");
    return MAP_VALUES[stringNumber]
  })
  const total = parsedValues.reduce((total, currentNumber, currentIndex) =>{
    if(parsedValues[currentIndex + 1] && parsedValues[currentIndex + 1] > currentNumber){
      return total - currentNumber
    }
    return total + currentNumber;
  } , 0)
  return total
}

const romanNumber = "XIV";
const integerResult = romanTointeger(romanNumber);
console.log(integerResult)
