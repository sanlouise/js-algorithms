var sum = function(array) {
  if (array.length === 1) {
    return array[0];
  }
  else {
    return array.pop() + sum(array);
  }
};

console.log(sum([1,2,3,4,5,6]));