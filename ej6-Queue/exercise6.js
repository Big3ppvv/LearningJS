function making_queueWithLoop(array, num){
    const copy = [];
    const deleted_value = [];
    for(let i = 0; i < array.length; i++){
        if(i === 0){
            deleted_value.push(array[i]) 
        }else{
            copy.push(array[i])
        }   
    }
    copy.push(num)
    return copy
}
   
const array = [5,6,7];
const num = 9;
const result = making_queueWithLoop(array, num);
console.log(result);
