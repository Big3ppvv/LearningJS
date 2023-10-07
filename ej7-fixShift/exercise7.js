const newObject = {
    length: 5,
    elements: {
      0: 'taza',
      1: 'plato',
      2: 'cuchillo',
      3: 'tenedor',
      4: 'vaso'
    }
  }
  
  const shift = (newObject) => { // O(n)
    // ver el largo del array 0 
    if (newObject.length === 0) return;
    // Eliminar el primer elem
    const deletedValue = newObject.elements[0];
    const keys = Object.keys(newObject.elements);
    for(const key of keys){
      const nextKey = +key + 1;
      newObject.elements[key] = newObject.elements[nextKey];
    }
    newObject.length--;
    delete newObject.elements[newObject.length];
    return deletedValue;
  }

console.log(shift(newObject));
console.log(shift(newObject));
