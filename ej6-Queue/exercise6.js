function making_queueWithLoop(array, num){
    for(let i = 0; i <= array.length ; i++){
        if(i === 0){
            array.splice(0,1);
        } 
    }
    array[array.length] = num; 
    return array;
}

/*function making_queueWithEach(array, num){
    array.array.forEach(element => {
        
    });
}*/

const array = [5,6,7];
const num = 9;
const queue_with_ForLoop = making_queueWithLoop(array, num);
console.log(queue_with_ForLoop)
//const queue_with_EachFor =  making_queueWithEach(array, num);



