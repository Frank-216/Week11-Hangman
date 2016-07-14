//Your game.js file will randomly select a word for the play

var wordBank = ['red','yellow','blue','green','orange'];

var solution = function(wordBank){
	// Choose a random variable from word bank 
	rand = wordBank[Math.floor(Math.random() * wordBank.length)];
	return rand;
}

// return a random work 
console.log(solution(wordBank));