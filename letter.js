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
	console.log(this.answer);
	this.guessList = guessList;
	this.guessList = guess;
	this.display = [];
	// function to display the words 
	this.displaySpaces = function(){
		for(var i = 0; i < answer.length; i++){
		this.display.push("_");
		};

	};
	this.adjustDisplay = function(){
		var position = answer.indexOf(this.guess);
		
		console.log(position);
		this.display[position] = this.guess;
		// this.display[position]= answer;
		// console.log(this.display);
	}
}	

// var word = new Spaces('red','r','r');
// console.log(word);
// word.displaySpaces();
// word.adjustDisplay("r");



module.exports = Spaces;