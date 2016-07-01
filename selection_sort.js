var unsortedArray = [4, 5, 2, 2, 2];

function selectionSort(array) {
  var n = array.length - 1;

  for (var i = 0; i < n; i++) {
    var indexMin = i;

    for (var j = i + 1; j <= n; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }

    if (indexMin !== i) {
      var current = array[i];
      array[i] = array[indexMin];
      array[indexMin] = current;
    }
  }
  return array;
}

console.log(selectionSort(unsortedArray));