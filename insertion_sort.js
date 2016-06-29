function insertionSort(unsortedList) {
  var len = unsortedList.length;
  
  for(var i = 1; i < len; i++) {
    var temp = unsortedList[i]; //Copy of the current element.
    /*Check through the sorted part and compare with the 
    number in tmp. If large, shift the number*/
    for(var j = i - 1; j >= 0 && (unsortedList[j] > temp); j--) {
      //Shift the number
      unsortedList[j+1] = unsortedList[j];
    }
    //Insert the copied number at the correct position
    //in sorted part.
    unsortedList[j+1] = temp;
  }
}
var list = [5, 3, 1, 2, 4];
insertionSort(list);
console.log(list);