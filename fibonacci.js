// F (0) = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ...

function getFibonacci(num) {

	var fibonacci = [0, 1];
	for (var i = 2; i <= num; i++) {
		fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
	}
	return fibonacci[num];
}

console.log(getFibonacci(12));

//Recursive
function fibonacci(n){
  if(n<=1)
    return n;
  else
    return fibonacci(n-1) + fibonacci (n-2);  
}
