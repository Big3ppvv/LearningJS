function repeated_value(list){
    let declarator = {}
    list.forEach( (element, index ) => {
        if(element in declarator){
            declarator[element].push(index);
        }else{
            declarator[element] = [index];
        }
    });
    
    let repeated = [];
    let unique = [];
    for(element in declarator){
        if (declarator[element].length === 1) {
            unique.push({"element":element, "index":declarator[element][0]});
        }else{
            repeated.push({"element":element, "indexes":declarator[element]});
        }
    }
    let response = {"original_list":list, "repeated":repeated, "unique": unique};
    return response
    
}
const list = [0, 1, 2 ,3, 0 , 1 , 2, 3, 4];
const repeatedUniqueValues = repeated_value(list);
console.log(repeatedUniqueValues);