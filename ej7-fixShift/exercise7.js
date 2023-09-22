const newArray = {
    length: 4,
    elements: {
      0: 'taza',
      1: 'plato',
      2: 'cuchillo',
      3: 'tenedor'
    }
  }
  
  const shift = (newArray) => { // O(n)
    // ver el largo del array 0 
    if (newArray.length === 0) return;
    // Eliminar el primer elem
    const arrayAsObj = newArray.elements;
    delete(arrayAsObj[0]);
    for(let i = 0; i <= arrayAsObj.length; i++){
        arrayAsObj[i] = arrayAsObj[i + 1]
    }
    console.log(arrayAsObj);
  }

  shift(newArray);
  shift(newArray);
  