// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.

// add game file 
var game = require('./game.js');
// add word file 
var word = require('./word.js');
// array of 
var wordBank = ['red','yellow','blue','green','orange'];

// call Game to get a random word
var callGame =  game();

// var callWord = word();



