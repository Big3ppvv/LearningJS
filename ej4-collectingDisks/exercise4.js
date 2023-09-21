function creatingDisks(id, property, discos, valor) {
    if(valor === ""){
        delete discos[id][property];

    }
    if(property === "canciones" && discos[id][property] === undefined) {
        discos[id][property] = [].push(valor);

    }
    if(property === "canciones" && valor !== ""){
        discos[id][propiedad].push(valor);

    }
    if(property !== "canciones" && valor !== "")
        discos[id][property] = valor;

}

const Object_Disk = {
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
const property = "canciones";
const valor = "";

console.log(creatingDisks(id, property, Object_Disk, valor));