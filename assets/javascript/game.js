window.onload = function () {

	// current word
	var word;
	// list of words
	var words = ["pikachu","squirtle","badges","kanto","gym"];
	// user lives (guesses) left 
	var lives = 5;
	// current user guess
	var guess;
	// past user guesses
	var guessedLetters = [];
	// counts the correct guesses
	var counter = 0;
	// create random variable
	var randomWord;

	// get random word
	function randomPick(){
		randomWord = words[Math.floor(Math.random()*words.length)];
		// make it a little easier to test
		console.log(randomWord);
	};

	// Display number of lives left
	function displayLives(){
		var showLives = document.getElementById("guessesLeft");
		showLives.innerHTML = "You have " + lives + " guesses remaining";
		if (lives < 1) {
			alert("Game Over! Refresh the page the replay.");
			$("#imagePlace").html("<img src=\"assets/images/youLose.png\" style=\"height:250px;\">");
			$("#displayWins").html("Try again, loser.");

		}
	};

	// display the letters already guessed
	function displayGuesses(){
		var showGuesses = document.getElementById("guessedList");
		showGuesses.innerHTML = "Incorrect Guesses: " + guessedLetters;	
	};

	// create unique letter placeholders
	function displayRandom(){
		var showWord = document.getElementById("displayWord");
		var correct = document.createElement("ul");
		correct.setAttribute('id', 'the-word');

		// need to give each letterPlace a unique ID
		for (var i=0;i<randomWord.length;i++) {
			letterPlace = document.createElement("li");
			letterPlace.setAttribute('class','letterPlace');
			letterPlace.setAttribute('id',randomWord[i]);
			if (randomWord != "-") {
				letterPlace.innerHTML = "_";
			}
			showWord.appendChild(correct);
			correct.appendChild(letterPlace);
		};
	};

	// takes user key input, if matches letter, displays user input, and if complete word, displays image and winner message
	function displayLetters(guess){
		for (var i=0;i<randomWord.length;i++){
			if (guess == randomWord[i]){
				$("#"+randomWord[i]).html(guess);
				counter += 1;
			if (counter == randomWord.length){
				displayImage();
				displayWins();
				}
			}
		};
	};

	// stores and displays images
	function displayImage(){
		var images = { 3:"assets/images/gym.png", 5:"assets/images/kanto.jpg", 6:"assets/images/badge.png", 7:"assets/images/pikachu.png", 8:"assets/images/squirtle.png"};
		$("#imagePlace").html("<img src="+images[randomWord.length]+" style=\"height:225px;\">");
	};

	// displays winner messages
	function displayWins(){
		$("#displayWins").html("Yay! You Won!");
		alert("Congrats, you won! Refresh the page to play again.");
	};

 	// pretty embarassed about this function but HEY, it works
 	// tests
	function testGuess(letter){
		for (var i=0;i<randomWord.length;i++){	
			
			if (letter == randomWord[0]){
				displayLetters(letter);
				return;
			}
			else if (letter == randomWord[i+1]){
				displayLetters(letter);
				return;
			}
			else if (letter == randomWord[i+2]){
				displayLetters(letter);
				return;
			}
			else if (letter == randomWord[i+3]){
				displayLetters(letter);
				return;
			}
			else if (letter == randomWord[i+4]){
				displayLetters(letter);
				return;
			}
			else if (letter == randomWord[i+5]){
				displayLetters(letter);
				return;
			}
			else if (letter == randomWord[i+6]){
				displayLetters(letter);
				return;
			}
			else if (letter == randomWord[i+7]){
				displayLetters(letter);
				return;
			}
			else {
				var j = 0;
				if (letter == guessedLetters[j]){
					alert("Already guessed!");
					return;
				}					
				else if (letter == guessedLetters[j+1]){
					alert("Already guessed!");
					return;
				}
				else if (letter == guessedLetters[j+2]){
					alert("Already guessed!");
					return;
				}
				else if (letter == guessedLetters[j+3]){
					alert("Already guessed!");
					return;
				}
				else if (letter == guessedLetters[j+4]){
					alert("Already guessed!");
					return;
				}
				else {
					guessedLetters.push(letter);
					lives = lives - 1;
					return;
				}	
			};
		};
	};

	randomPick();
	displayRandom();

	$(document).keyup(function(e){
		guess = event.key;
		console.log(guess);
		testGuess(guess);
		displayGuesses();
		displayLives();
	});
};