//word.js should contain all of the methods which will check the letters guessed versus the random word selected.

//first we need to take a value that the user enters and return if a true or false if the work is correct or incorrect 
// guess is the users guess 
// answer is the correc answer 
// alreadyGuessed is an array of the guesses already made 
// you need to pass in the word 
console.log(process.argv);
var storage = [];
var guessCheck = function(userGuess, answer){

	if(storage.indexOf(userGuess) !== -1){
		//return a value to say that this was already guessed and try again
		console.log("You already guessed "+ ". Try again!");
	}else{
		// check if the guess is in the answer 
		if(answer.indexOf(userGuess) !== -1){
			console.log("Your guess is correct!" + userGuess + " Keep going!");
		}else{
			console.log('Your guess is incorrect! '+ userGuess + ' is not in the word.')
		}

	}
	storage.push(userGuess);
}

guessCheck(process.argv[2], 'red');

console.log(storage);

module.exports = guessCheck;