// Code your solutions in this file
const friends = ['Guadalupe', 'Ollie', 'Aki'];


function writeCards(friends) {
    const cards = [] 
for (let i = 0 ; i < friends.length; i++){
    cards.push(`Thank you, ${friends[i]}, for the wonderful surprise gift!`);
    } 
    return cards;
}
writeCards(friends)

function countDown(){
    let countDown = 10
    while (countDown >= 0){
        console.log(countDown--);
    }
}

//console.log(`Thank you, ${friends[i]}, for the wonderful surprise gift!`);
