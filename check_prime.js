//Verifying a prime number

//A prime number (or a prime) is a natural number greater than 1 that has no positive divisors 
//other than 1 and itself. 
//A natural number greater than 1 that is not a prime number is called a composite number.

//The simplest primality test is trial division: Given an input number n, check whether any prime 
//integer m from 2 to √n evenly divides n (the division leaves no remainder). If n is divisible by 
//any m then n is composite, otherwise it is prime.

//My answer

function isPrime(number) {
    if (number < 2) {
        return false;
    } else if (number <=3) {
        return true;
    } else if ((number % 2 == 0) || (number % 3 == 0)) {
        return true;
    } else return false;
}

console.log(isPrime(17));


//http://www.thatjsdude.com/interview/js1.html#reverseWords

function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false; 
    }
    else
      divisor++;
  }
  return true;
}