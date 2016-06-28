//Find all prime factors of a number.
//"Factors" are the numbers you multiply together to get another number

function primeFactors(number){
  var factors = [], 
      divisor = 2;
  
  while(number > 2){
    if(number % divisor == 0){
       factors.push(divisor); 
       number = number / divisor;
    }
    else{
      divisor++;
    }     
  }
  return factors;
}

console.log(primeFactors(50));