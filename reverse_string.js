function reverseString(string) {
	var reversedString = " ";
	for (var i = string.length; i >= 0; i--) {
		reversedString += string[i];
	}

	return reversedString;
}

console.log(reverseString("Hello there!"));



