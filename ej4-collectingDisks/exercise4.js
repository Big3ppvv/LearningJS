function valuate_properties(id, property, disks, value) {
    if(value === ""){
        delete disks[id][property];

    }
    if(property === "canciones" &&disks[id][property] === undefined) {
       disks[id][property] = [].push(value);

    }
    if(property === "canciones" && value !== ""){
       disks[id][propiedad].push(value);

    }
    if(property !== "canciones" && value !== "")
       disks[id][property] = value;

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
const value = "";
console.log(creatingDisks(id, property, Object_Disk, value));