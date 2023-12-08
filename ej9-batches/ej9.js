// function createBatches(list, number) {
//   const emptyBatch = []
//   for (let i = 0; i <= list.length; i++) {
//     if (emptyBatch.length === 0) {
//       emptyBatch.push([])
//     }

//     if (i % number === 0 && i !== 0) {
//       emptyBatch.push([]);
//     }
//     emptyBatch.push(list[i]);
//   }
//   return emptyBatch
// }

/**
 * 
 */
const createBatches = (elements, batchSize) => {
  if (!elements || elements.length === 0 || !batchSize || typeof batchSize !== 'number') return elements
  
  const result = [];
  let batch = []
  const units = elements.length

  elements.forEach((element, index) => {
    batch.push(element)
    if (batch.length === batchSize || index === units-1 ) {
      result.push(batch)
      batch = []
    }
  });

  return result;
}

const list = [62, 17, 83, 45, 28, 91, 53, 72, 94, 5, 34, 99, 9, 76, 61, 30, 37, 18, 48, 89, 15, 77, 41, 1, 49, 80, 96, 2, 20, 56
];
const number = 3;
const batch = createBatches(list, number);
console.log(batch);

