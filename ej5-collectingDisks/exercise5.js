function creatingDisks(id, propiedad, discos, valor) {
    if(valor === ""){
        delete discos[id][propiedad];

    }else if(propiedad === "canciones" && discos[id][propiedad] === undefined) {
        discos[id][propiedad] = [].push(valor);

    }else if(propiedad === "canciones" && valor !== ""){
        discos[id][propiedad].push(valor);

    }else if(propiedad !== "canciones" && valor !== "")
        discos[id][propiedad] = valor;

}

var coleccionDeDiscos = {
    7853 : {
        titulosDelAlbum : "Bee Gees Greatest",
        artista : "Bee Gees",
        canciones : ["Stayin Alive"]
    },

    5439 : {
        titulosDelAlbum : "ABBA Gold"
    }
};

const id = 4589;
var propiedad = "canciones";
var valor = "";

console.log(creatingDisks(id, propiedad, coleccionDeDiscos, valor));