function reverseWords(string) {
	return string.split(' ').reverse();
}

// OR

var words = "My name is Sandra"

var i=words.length;
i=i-1;
var reversedwords=""; 

for (var x = i;x >=0 ; x--){
    reversedwords +=(words.charAt(x));
}

alert(reversedwords) 