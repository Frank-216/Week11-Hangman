// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.
// add inquirer
var inquirer = require('inquirer');
// add game file 
var game  =  require('./game.js');
// var game = require('./game.js');
// add word file 
var word = require('./word.js');
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
 var guessList =[]
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
	console.log('Letters Guessed: ' + string );
	console.log(counter + " guesses remaining");
}
// getBlank.displaySpaces();
// console.log(getBlank);
var PromptQuestion = function(){
	inquirer.prompt([
		{type:'input',
		 message: "",
		 name:'guess',
		 // validate: function(value){
			// 			if(isNaN(value) == false){
			// 				return true;
			// 			}else{
			// 				return false;
			// 			}
			// 		}
	}]).then(function (answers){
		console.log(answer);
	})
};
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
		// as guess list to answers
			guessList.push(answers.letter);
			displayGusses(guessList);
			if(counter > 0){
				counter--;
				// recalls get letter until time runs off 
				
				getLetter();
			}else{
				console.log("Game Over: The correct answer is " + answer);
			}
	})
}

// Run Game 
console.log("Welcome to Hangman!");
console.log("===========================================");

spaces.displaySpaces();
displayAnswerSpaces(spaces.display);


getLetter();

