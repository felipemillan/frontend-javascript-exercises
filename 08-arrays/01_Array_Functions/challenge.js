module.exports.reversePlusOne = function (a){
	a.reverse().unshift(1);
	return a;
	// reverse explanation http://www.w3schools.com/jsref/jsref_reverse.asp
};

module.exports.plusesEverywhere = function (a){
	return a.join('+');
	// join explanation http://www.w3schools.com/jsref/jsref_join.asp
};

module.exports.arrayQuantityPlusOne = function (a){
	var number = a.length;
	arrayQuantityPlusOne =number+1;
	return arrayQuantityPlusOne;
};