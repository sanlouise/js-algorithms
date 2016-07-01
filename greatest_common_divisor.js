//Find the greatest common divisor of two numbers

function gcd( a, b ) {

	//Convert to positive integers
    if (a < 0) a = -a;
    if (b < 0) b = -b;

    if (b > a) {
    	var temp = a; 
    	a = b; 
    	b = temp;

    }

    if (b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a;

}

console.log(gcd(66, 6));