//Your game.js file will randomly select a word for the play

// function to take a random word from the array 
function Solution(){
	// array of words a user can choose 
	var wordBank = ['red','yellow','blue','green','orange'];
	// Choose a random variable from word bank
	var word = wordBank[Math.floor(Math.random() * wordBank.length)];
	// return the choosen word
	// console.log(word);
	return word;
	}


// return a random word
// export as solution
module.exports = Solution;