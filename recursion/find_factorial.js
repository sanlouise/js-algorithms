var factorial = function(n) {

    if (n === 0) {
        return 1;
    }

    if (n > 1) {
        return n * factorial(n - 1);    
    }

    return 1;
};
console.log(factorial(6));


