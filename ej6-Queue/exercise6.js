function makeQueueWithLoop(elements, num){
    if(elements.length === 0) return [num];
    const first_element = [];
    const newQueue = [];
    for(let i = 0; i < array.length; i++){
        if(i === 0){
            first_element.push(elements[i]);
        }else{
            newQueue.push(elements[i]);
        }
    }
    newQueue.push(num);
    return newQueue;
}   
   
const array = [5,6,7];
const num = 9;
const result = makeQueueWithLoop(array, num);
console.log(result);
