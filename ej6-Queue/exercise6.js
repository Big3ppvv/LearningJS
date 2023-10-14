function makeQueueWithLoop(elements, num){
    if(elements.length === 0) return [num];
    let firstElement;
    const newQueue = [];
    for(let i = 0; i < numbers.length; i++){
        if(i === 0){
            firstElement = elements[0];
        }else{
            newQueue.push(elements[i]);
        }
    }
    newQueue.push(num);
    return newQueue;
}   
   
const numbers = [5,6,7];
const num = 9;
const result = makeQueueWithLoop(numbers, num);
console.log(makeQueueWithLoop(numbers, 3)); // 6,7,3
console.log(makeQueueWithLoop(numbers, 9)); // 6,7,9
