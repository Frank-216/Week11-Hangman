//Your game.js file will randomly select a word for the play


function Solution(){
	var wordBank = ['red','yellow','blue','green','orange'];
	// Choose a random variable from word bank
	var word = wordBank[Math.floor(Math.random() * wordBank.length)];
	return word;
	}


// return a random word
Solution();

module.exports = Solution;