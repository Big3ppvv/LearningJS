function counting_cards(cards){

    switch(cards){
        case 2:
        case 3:
        case 4:
        case 5:
            count++;
            return "Apostar " + count;

        case 7:
        case 8:
        case 9:
            return "Esperar " + count
        
        case 10:
        case "J":
        case "Q":
        case "K":
            count--;
            return "Esperar " + count

    }
}

cards = 4;
count = 0;

response = counting_cards(cards)
console.log(response)