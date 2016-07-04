function arraySum(a) {
    var sum = 0; 
    for(var i = 0; i < a.length; i++){ 
        if(typeof a[i] == "number"){
            sum += a[i];
        }else if(a[i] instanceof Array){
            sum += arraySum(a[i]);
        }
    }
    return sum;
}

console.log(arraySum([1, [3, 5], 6]));