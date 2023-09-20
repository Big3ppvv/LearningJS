/*
Condiciones:
Golpes == 1 --> Hole-in-one
Golpes <= par - 2 --> Eagle
Golpes == par - 1 --> Birdie
Golpes == par  --> Par
Golpes == par + 1 --> Bogey
Golpes == par + 2 --> Double Bogey
Golpes >= par + 3 --> Go home!
*/

function strikes_of_golf(par, hits) {
    if (!Number.isInteger(hits) || !Number.isInteger(par)) {
        return "It isn't an Integer";
    }

    if(hits <= par - 2) {
        return "Eagle"
    }

    if(hits >= par + 3){
        return "Go Home!"
    }

    switch(hits){
        case 1:
            return "Hole-in-one";
        case par - 1:
            return "Birdie";
        case par:
            return "Par";
        case par + 1:
            return "Bogey";
        case par + 2:
            return "Double Bogey";
    }
}

const hitsMade = 10;
const par = 9;
const response = strikes_of_golf(par, hitsMade);
console.log(response)