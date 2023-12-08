/**
 * @param {number[]} numbers
 * @return {Object}
 */
function reduceList(numbers) {
  const reducer = (accumulator, value, index) => {
    // Caso de que el value ya fue visto
    if(value in accumulator) {
        accumulator[value].push(index);
        return accumulator;
    }
    // Caso de que el value no fue visto
    accumulator[value] = [index]
    return accumulator;
  }

  return numbers.reduce(reducer, {})

}

const numbers = [0, 1, 2, 3, 0, 1, 2, 3, 4];
const repeatedValues = reduceList(numbers)
console.log(repeatedValues)