//Remove duplicates

arr = ["Sandra", "is", "is", "a", "Dutch", "Dutch", "girl"]

function removeDuplicates(arr) {
	var array = [];
	var exists = {};
	var element;

	for (var i = 0; i< arr.length; i++) {
		var element = arr[i];
		if (!exists[element]) {
			array.push(element);
			exists[element] = true;
		}
	}

	return array;
}
console.log(removeDuplicates(arr));

// Find prime

function isPrime(n) {
	while (n < 2) return false;

	for (var i = 2; i < n; i++) {
		if (n % i == 0) return false;
	}
	return true;
}

console.log(isPrime(4));

//Reverse a string 

function reverseString(string) {
	var reversedString = " ";

	for (i = string.length; i >= 0; i--) {
		reversedString += string[i];
	}

	return reversedString;
}

console.log(reverseString("Hello there!"));




function reverseString(array) {
	var reversedArray = " ";
	var eleent = array.slice[i];

	for (i = string.length; i >= 0; i--) {
		arrayString += array[i];
	}

	return reversedString;
}

console.log(reverseString("Hello there!"));






