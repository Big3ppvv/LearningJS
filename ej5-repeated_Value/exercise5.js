function repeated_value(list){
    let object = {}
    list.forEach( (element, index ) => {
        if(element in object){
            object[element].push(index);
        }else{
            object[element] = [index];
        }
    });
    
    const repeated = [];
    const unique = [];
    for(element in object){
        if (object[element].length === 1) {
            unique.push({"element":element, "index":object[element][0]});
        }else{
            repeated.push({"element":element, "indexes":object[element]});
        }
    }
    const response = {"original_list":list, "repeated":repeated, "unique": unique};
    return response
    
}
const list = [0, 1, 2 ,3, 0 , 1 , 2, 3, 4];
const repeatedUniqueValues = repeated_value(list);
console.log(repeatedUniqueValues);