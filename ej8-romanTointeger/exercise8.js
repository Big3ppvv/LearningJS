const MAP_VALUES = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}

function romanTointeger(romanNumber) {
  // Iterar sobre cada elemento del array y comparar con el elemento siguiente
  const letters = romanNumber.split("");
  const keys = Object.keys(MAP_VALUES);
  for(let i = 0; i < keys.length; i++){
    
  }

}
const romanNumber = "MCMXCIV";
romanTointeger(romanNumber);
