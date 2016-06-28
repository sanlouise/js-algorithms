function reverseString(string) {
	var reversedString = " ";
	for (var i = string.length; i >= 0; i--) {
		reversedString += string[i];
	}
	return reversedString;
}
console.log(reverseString("Hello there!"));


// http://www.thatjsdude.com/interview/js1.html
function reverse(str){
  var rtnStr = [];
  if(!str || typeof str != 'string' || str.length < 2 ) return str;
  
  for(var i = str.length-1; i>=0;i--){
    rtnStr.push(str[i]);
  }
  return rtnStr.join('');
}


//Recursive
function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

console.log(reverse("Hello!"));

//With built-in method

function reverse(str){
  if(!str || str.length <2) return str;
  
  return str.split('').reverse().join('');
}
