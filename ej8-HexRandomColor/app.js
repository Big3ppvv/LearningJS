function makeHexColor(){
    const hexLetters = "abcdef0123456789";
    let completeHexCode = "#";

    while(completeHexCode.length < 7){
        index = Math.floor(Math.random() * hexLetters.length);
        completeHexCode += hexLetters[index].toLocaleUpperCase();
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


