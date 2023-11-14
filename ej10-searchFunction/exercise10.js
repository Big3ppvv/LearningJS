/**
 * Exercise 10
 * @description Create a function that receives a text and a word and returns an object with the following structure:
 * {
 *   word: {
 *    searchedWord: 'umbrella',
 *    count: 1,
 *    paragraphs: [1, 2, 3]
 *   }
 * }
 * @param {string} text
 * @param {string} word
 * @returns {object}
 */
const search = (text, word) => {
  // validar que el texto y la palabra no esten vacios
  if(text.length === 0 || word.length === 0 ) throw Error("You provide an empty Array");

  // Crear el objeto que se va a retornar
  const searchedWord = {
    "word":{
      "specificWord": word, 
      "count": 0,
      "paragraphs": []
    }
  };

  // Separar el texto en parrafos
  const paragraphs = text.split('\n');
  // Recorrer los parrafos
  paragraphs.forEach((specificParagraph,position) =>{
    // Buscar la palabra en el parrafo
    if(specificParagraph.includes(word) ){
      searchedWord["word"]["paragraphs"].push(position + 1);
      searchedWord["word"]["count"] += 1
    }
    // Si la palabra existe en el parrafo, aumentar el contador de la palabra
  })
 
  // Retornar el objeto
  return searchedWord;
}


const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Vulputate enim nulla aliquet porttitor lacus. Ut venenatis tellus in metus vulputate eu scelerisque felis imperdiet. Sagittis purus sit amet volutpat consequat mauris nunc congue nisi. Eget dolor morbi non arcu risus quis varius.
     Venenatis urna cursus eget nunc scelerisque viverra mauris. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Risus nec feugiat in fermentum posuere urna nec. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Massa sed elementum tempus egestas sed sed risus. Ultrices neque ornare aenean euismod elementum nisi quis eleifend.
Vel fringilla est ullamcorper eget nulla facilisi etiam. Pulvinar sapien et ligula ullamcorper. Eu tincidunt tortor aliquam nulla facilisi cras. Cum sociis natoque penatibus et magnis dis parturient. Elit sed vulputate mi sit amet mauris commodo. Pharetra diam sit amet nisl.
Ut enim blandit volutpat maecenas volutpat blandit. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque.

Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Nisl pretium fusce id velit ut. Vitae aliquet nec ullamcorper sit amet. Laoreet non curabitur gravida arcu ac tortor. Et leo duis ut diam quam nulla. Faucibus ornare suspendisse sed nisi. Ornare arcu dui vivamus arcu felis bibendum. Ultrices neque ornare aenean euismod. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.
  Ligula ullamcorper malesuada proin libero nunc. Netus et malesuada fames ac turpis egestas. Amet consectetur adipiscing elit pellentesque habitant morbi. Placerat orci nulla pellentesque dignissim enim. Amet justo donec enim diam vulputate ut pharetra sit amet. Faucibus in ornare quam viverra orci sagittis eu volutpat. Urna molestie at elementum eu facilisis sed. Bibendum est ultricies integer quis auctor elit sed vulputate mi.
  
 Ornare suspendisse sed nisi lacus sed viverra tellus in hac. Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Mattis nunc sed blandit libero volutpat sed cras. Mauris vitae ultricies leo integer malesuada nunc.
Sem fringilla ut morbi tincidunt augue interdum velit euismod in. In ornare umbrella umbrella quam viverra orci sagittis eu volutpat. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. Nullam eget felis eget nunc lobortis mattis. Sagittis id consectetur purus ut faucibus pulvinar. Egestas congue quisque egestas diam in arcu cursus euismod.
Habitant morbi tristique senectus et netus. Ultricies mi quis hendrerit dolor magna eget est lorem ipsum. Mollis nunc sed id semper. Orci eu lobortis elementum nibh tellus.
Ultrices sagittis orci a scelerisque purus semper. Fusce id velit ut tortor pretium. Egestas diam in arcu cursus euismod quis viverra nibh cras. Proin sed libero enim sed. In ante metus dictum at tempor commodo ullamcorper a lacus. Risus ultricies tristique nulla aliquet. Pharetra convallis posuere morbi leo urna. Montes nascetur ridiculus mus mauris vitae ultricies leo. Egestas congue quisque egestas diam in arcu cursus euismod.
Purus in mollis nunc sed id semper risus in. Massa tincidunt dui ut ornare lectus sit amet est placerat. Placerat duis ultricies lacus sed turpis.


Volutpat odio facilisis mauris sit amet massa vitae tortor condimentum. Convallis aenean et tortor at risus viverra adipiscing at in. Enim diam vulputate ut pharetra sit amet aliquam id diam. Hac habitasse platea dictumst quisque. Semper eget duis at tellus at. Tempus egestas sed sed risus pretium. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Ut tristique et egestas quis ipsum suspendisse ultrices.`

const searchedWord = 'umbrella';
const verifyRepeatedWord = search(text, searchedWord);
console.log(verifyRepeatedWord);
