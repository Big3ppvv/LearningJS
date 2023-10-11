/* Define a function that takes an array and a number like arguments.
Add the number in the end of the array and next delete the first element.
The function must return  the element that was delete */

function returnElement(array, num) {
    array.push(num);
    let firstElement;
    const elementsCopy = [...array];
    array.length = 0;
    const filterElement = (element, index) => {
        if(index === 0){
            firstElement = element;
            return;
        }
        array.push(element);
    };
    elementsCopy.forEach(filterElement);
    
    console.log(array)
}

const numbers = [5,6,7,8];
const newNum = 9;
const firstNumber = returnElement(numbers, newNum);
console.log(firstNumber)
