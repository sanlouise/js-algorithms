var unsortedArray = [7, 3, 6, 1, 9, 8, 2, 5, 4];

function bubble_sort(array) {
  var n = array.length;
  var swapped = true;
  
  while (swapped === true) {
    swapped = false;
  
    for (var i = 0; i < n - 1; i++) {
      
      if (array[i] > array[i+1]) {
        
        // Swap variables
        var current = array[i];
        array[i] = array[i+1];
        array[i+1] = current;

        swapped = true
      }
    }
  }
  return array;
}

console.log(bubble_sort(unsortedArray);