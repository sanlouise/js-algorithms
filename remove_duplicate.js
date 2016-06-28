// Remove duplicate members from an array


function deleteDuplicate(arr) {
	var array = [];
	var element;
	var exists = {};

	for (var i = 0; i<arr.length; i++) {
		element = arr[i];

		if(!exists[element]) {
			array.push(element);
			exists[element] = true;
		}
	}
	return array;
}

var firstArray = [2, 3, 2, 5, 4, 2, 3, 5, 6];
console.log(deleteDuplicate(firstArray));

