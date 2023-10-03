function making_queueWithLoop(array, num){
    const deleted_value = [];
    for(let i = 0; i <= array.length; i++){
        if(i === 0){
            array.push(num);
        }
        
    }
       
}
   
const array = [5,6,7];
const num = 9;
const result = making_queueWithLoop(array, num);
console.log(result);
