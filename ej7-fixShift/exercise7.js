const newArray = {
    length: 4,
    elements: {
      0: 'taza',
      1: 'plato',
      2: 'cuchillo',
      3: 'tenedor',
      4: 'vaso'
    }
  }
  
  const shift = (newArray) => { // O(n)
    // ver el largo del array 0 
    if (newArray.length === 0) return;
    // Eliminar el primer elem
    const arrayAsObj = newArray.elements;
    const deleted_values = [];

    for(let i = 0; i < arrayAsObj.length - 1; i++){
      if(i === 0){
        arrayAsObj.array.forEach(element, index => {
          deleted_values.push(element);
          return;
        });
      }
      arrayAsObj[i] = element
    }
    
  }

  shift(newArray);
  shift(newArray);
