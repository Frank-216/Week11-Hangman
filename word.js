//word.js should contain all of the methods which will check the letters guessed versus the random word selected.

//first we need to take a value that the user enters and return if a true or false if the work is correct or incorrect 
// guess is the users guess 
// answer is the correc answer 
// alreadyGuessed is an array of the guesses already made 
// you need to pass in the word 
console.log(process.argv);

var Guesscheck = function(userGuess, answer, guessList){
		this.userGuess = userGuess;
		this.answer= answer;
		this.guessList = guessList;
		this.guessStatus = false;
		this.check = function(){
			// check if the guess is in the answer 
			if(this.guessList.indexOf(this.userGuess) === -1){
				//is the guess in the user guess 

				if(this.answer.indexOf(this.userGuess) !== -1){
					console.log("Your guess is correct!" + this.userGuess + " Keep going!");
					this.guessStatus = true;
				}else{
					console.log('Your guess is incorrect! '+ this.userGuess + ' is not in the word.')
				}
			}else{
					console.log('You already guessed: '+ this.userGuess + ' . Try again!');
					this.guessStatus =	true;
					}
		}
	}
// var array = ['s'];
// var check = new Guesscheck('r','red', array);
// array.push("s");
// var secondCheck = new Guesscheck('s','red',array);
// check.check();
// console.log(secondCheck);
// secondCheck.check();

// check.check();
// console.log(check);
// check.check();
module.exports = Guesscheck;