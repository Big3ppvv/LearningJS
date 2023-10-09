function makeHexColor(){
    const hexLetters = "abcdef0123456789";
    let completeHexCode = "#";

    while(completeHexCode.length < 7){
        index = Math.floor(Math.random() * hexLetters.length); //Para generar numeros aleatorios
        completeHexCode += hexLetters[index].toLocaleUpperCase(); //Para convertir las letras en Mayusculasit 
    }
   return completeHexCode;
}

const changeColor = document.getElementById("change-botton")

changeColor.addEventListener('click', () => {
    const hexColor = makeHexColor();
    const bodyElement = document.getElementsByTagName("body")[0];
    const h2Text =  document.getElementById("hex-text");
    bodyElement.style.backgroundColor = hexColor;
    h2Text.innerText = hexColor;
    
})


