// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.
// add inquirer
var inquirer = require('inquirer');
// add game file 
var game  =  require('./game.js');
// var game = require('./game.js');
// add word file 
var Word = require('./word.js');
// add letter file
var Letter = require('./letter.js');
// array answers
var wordBank = ['red','yellow','blue','green','orange'];


// create storage varables 
var guessList = [];
var guess;

// call Game to get a random word
 var answer =  game();
 // variable to hold list
 var guessList =[];
// get random word
//
var counter = 8;


var spaces = new Letter(answer, guessList, guess);
// get the space image 





function displayAnswerSpaces(array){
	var string = "";
	for(var i = 0; i < array.length; i++){
		string = string + array[i] +" ";
	}
	console.log(string);
}
function displayGusses(){
	var string = "";
	for(var i = 0; i < guessList.length; i++){
		string = string + guessList[i] +", ";
	}
	console.log("");
	console.log('Letters Guessed: ' + string );
	console.log("");
	console.log(counter + " guesses remaining");
	console.log("");
}
// getBlank.displaySpaces();
// console.log(getBlank);

var getLetter = function(){
	inquirer.prompt([{
		type:'input',
		message: "Enter a letter: ",
		name: "letter",
		validate: function(value){
						if(isNaN(value) == true){
							return true;
						}else{
							return false;
						}
					}
	}]).then(function(answers){
		
			// create a variable to hold the answer
			var guess = answers.letter;
			// add the guess to the guestList holder
			guessList.push(guess);
			// display guest list under guess 
			displayGusses(guessList);

			if(counter > 0){
				// recalls get letter until time runs off 
				var checkGuess = new Word(guess, answer, guessList);
				checkGuess.check();
				// recall get letter to restart the question 
				console.log(checkGuess);
				counter--;

				getLetter();
			}else{
				console.log("Game Over: The correct answer is " + answer);
			}
	})
}

// Run Game 
console.log("");
console.log("");
console.log("Welcome to Hangman!");
console.log("===========================================");
console.log('The game will begin soon.  You have 8 tries to get the correct answer.  Good luck!')

// call the display spaces function 
spaces.displaySpaces();
displayAnswerSpaces(spaces.display);
console.log("");

getLetter();

