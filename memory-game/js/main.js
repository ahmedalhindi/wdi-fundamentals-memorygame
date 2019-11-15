const cards = ["king","king","queen","queen"];
const cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne)

console.log("User flipped "+cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);

console.log("User flipped "+cardTwo);

if (cardsInPlay.length===2){
	if (cardsInPlay[0]===cardsInPlay[1]){
	console.log("You found a match")}
	else if (cardsInPlay[0]!==cardsInPlay[1]){
		console.log("Sorry, try again")
	}
}