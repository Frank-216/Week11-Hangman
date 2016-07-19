//letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

// //
// var display = [];
// var createSpaces = function(answer){
// 	for(var i = 0; i < answer.length; i++){
// 		display.push("_");
// 	}
// }
// createSpaces('reds');
// console.log(display);
// store correct guesses in an array 

var Spaces = function(answer,guess, guessList){
	this.answer = answer;
	this.guessList = guessList;
	this.guessList = guess;
	this.display = [];
	// function to display the words 
	this.displaySpaces = function(){
		for(var i = 0; i < answer.length; i++){
		this.display.push("_");
		};
		var string = "";
		for(var i = 0; i < this.guessList.length; i++){
			string = string + this.guessList[i] +", ";
		}
		console.log("");
		console.log('Letters Guessed: ' + string );
		console.log("");

	};
	this.adjustDisplay = function(){
		var position = this.answer.indexOf(this.guess);
		console.log("display");
		console.log(this.display);
		console.log(this.guessList);
		this.display[position] = this.guess;
		this.display[position]= answer;
		console.log(this.display);
		console.log("does this work");
	}
}	

// var word = new Spaces('red','r','r');
// console.log(word);
// word.displaySpaces();
// word.adjustDisplay();
// var red = "red";
// // console.log(red.indexOf('e'));

module.exports = Spaces;