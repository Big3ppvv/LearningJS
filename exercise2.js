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
        console.log("It isn't a Integer")
        
    }

    if(hits == 1){
        console.log("hole-in-one")
    }

    if(hits <= par - 2){
        console.log("Eagle")

    }

    if(hits == par - 1){
        console.log("Birdie")
    }

    if(hits == par ){
        console.log("Par")
    }

    if(hits == par + 1){
        console.log("Bogey")
    }

    if(hits = par + 2){
        console.log("Double Bogey")
    }
    
    if(hits >= par + 2){
        console.log("Go Home!")
    }
    



}






 const hits_made = 5;
 const par = 9;

 strikes_of_golf(par, hits_made)