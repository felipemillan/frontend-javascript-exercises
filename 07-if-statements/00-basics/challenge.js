module.exports.favoriteNumber = function(favoriteNumber, guess) {
 	if(guess > favoriteNumber){
		return"Too high";
	}
	else if(guess < favoriteNumber){
		return "Too low";
	}
	else if(guess === favoriteNumber){
		return "You got it!";
	}
};

module.exports.checkLock = function(firstNumber, secondNumber, thirdNumber, fourthNumber){
	if (firstNumber !=3 && firstNumber != 5 && firstNumber !=7) {
		return"incorrect";
	}
	else if (secondNumber != 2) {
		return"incorrect";
	}
	else if (thirdNumber < 5 || thirdNumber > 100){
		return"incorrect";
	}
	else if (9 <= fourthNumber && fourthNumber <= 20){
		return"incorrect";
	}
	else {
		return"correct";
	}
};

module.exports.canIGet = function(item, money){
	if(item == 'MacBook Air' && money >=999){
		return true;
	}
	else if(item == 'MacBook Pro' && money >= 1299){
		return true;
	}
	else if( item == 'Mac Pro' && money >=2499){
		return true;
	}
	else if(item == 'Apple Sticker' && money >= 1){
		return true;
	}
	else {
		return false;
	}
};