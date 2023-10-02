const newArray = {
    lengths: 4,
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
    let objectElements = newArray.elements;
    let objectIndex = newArray.lengths;
    const deletedElements = [];
    for(let i = 0; i <= objectIndex + 1; i++){
      if(i === 0){
        deletedElements.push(objectElements[i]);
        objectElements[i] = objectElements[i + 1]
        objectIndex--
      }
    }
    console.log(objectElements)
  }

  shift(newArray);
  shift(newArray);
