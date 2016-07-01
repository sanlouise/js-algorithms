// You may assume that A has enough space to hold additional elements from B. 
// The number of elements initialized in A and B are m and n respectively.
// From http://blog.sodhanalibrary.com/2015/06/merge-sorted-arrays-using-javascript.html#.V3Z5sZN95E4

function merge(A, B) {

    var m = A.length;
    var n = B.length;
    var i = m - 1;
    var j = n - 1;
    var k = m + n - 1;
    
    //While the count of all elements is bigger than 0
    while (k >= 0) {
        //If the length of arrayB-1 is bigger than 0 or 
        //(if length of arrayA-1 is bigger than 1 && element in array A is bigger than element in array B)
        if (j < 0 || (i >= 0 && A[i] > B[j]))
            //Array a
            A[k--] = A[i--];
        else
            A[k--] = B[j--];
    }
    //return array A
    return A;
}

console.log(merge([3, 4, 6, 10, 11, 15], [1, 5, 8, 12, 14, 19]));