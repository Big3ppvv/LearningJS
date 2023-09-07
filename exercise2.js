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

function strikes_of_golf(par,hits){
    
    
    if(Number.isInteger(hits) == false ||  (Number.isInteger(par)) == false ){
        console.log("It isn't a Integer");
        
    }

    function strikes_of_golf(par, hits) {
        if (!Number.isInteger(hits) || !Number.isInteger(par)) {
            return "It isn't an Integer";
        }
    
        const score = hits - par;
    
        switch (score) {
            case -2:
                return "Eagle";
            case -1:
                return "Birdie";
            case 0:
                return "Par";
            case 1:
                return "Bogey";
            case 2:
                return "Double Bogey";
            case 3:
                return "Go home!";
            default:
                return "Hole in one"
        }

    }

}

const hits_made = 5;
const par = 9;
const response = strikes_of_golf(par, hits_made);
console.log(response)
