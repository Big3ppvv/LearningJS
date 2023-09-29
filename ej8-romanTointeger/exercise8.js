function romanTointeger(roman_number){
    if(roman_number.lenght <= 1 || romanTointeger <= 15){
        return "Put the number correctly";
    }
    
    let integer_number = 0;
    for(let i = 0; i < roman_number.length; i++){
        if(roman_number[i] === "I" && roman_number[i + 1] === "V") {
            integer_number += 4;
            i++;
            continue;
        }

        if(roman_number[i] === "I" && roman_number[i + 1] === "X") {
            integer_number += 9;
            i++;
            continue;
        }

        if(roman_number[i] === "X" && roman_number[i + 1] === "L"){
            integer_number += 40;
            i++;
            continue;
        }

        if(roman_number[i] === "X" && roman_number[i + 1] === "C"){
            integer_number += 90;
            i++;
            continue;
        }

        if(roman_number[i] === "C" && roman_number[i + 1] === "D"){
            integer_number += 400;
            i++;
            continue;
        }

        if(roman_number[i] === "C" && roman_number[i + 1] === "M"){
            integer_number += 900;
            i++; 
            continue;
        }

        
        switch(roman_number[i]){
            case  "I":
                integer_number += 1;
                break;

            case "V":
                integer_number += 5;
                break;

            case "X":
                integer_number +=  10;
                break;

           case "L":
                integer_number += 50;
                break;
        
             case "C":
                integer_number += 100;
                break;
    
             case "D":
                integer_number += 500;
                break;
    
             case "M":
                integer_number += 1000;
                break;
        }
    }
    return integer_number
}

const roman_number = "MCMXCIV";
const int_number =  romanTointeger(roman_number);
console.log(int_number);
