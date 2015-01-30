module.exports.addItem = function (item, list){
	if (list.indexOf(item) === -1) {
		list.push(item);
	}
	return list;
	
	// indexOf http://www.w3schools.com/jsref/jsref_indexof_array.asp
	// push http://www.w3schools.com/jsref/jsref_push.asp
};

module.exports.reverseSortedList = function(list){
	list.sort().reverse();
	return list;
	
	//reverse http://www.w3schools.com/jsref/jsref_reverse.asp
};