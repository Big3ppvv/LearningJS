/* Define a function that takes an array and a number like arguments.
Add the number in the end of the array and next delete the first element.
The function must return  the element that was delete */

function return_element(array, num) {
    array.push(num);
    first_element = array.shift();
    return first_element;
}

const new_array = [5,6,7,8];
const new_num = 9;
const say_number = return_element(new_array, new_num);
