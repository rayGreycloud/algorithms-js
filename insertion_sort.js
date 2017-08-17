// Insert value before an index
var insert = function(array, rightIndex, value) {
  var key = value;

  for (var j = rightIndex; j >= 0 && array[j] > value; j--) {
    array[j + 1] = array[j];
  }

  array[j + 1] = value;
};

var insertionSort = function(array) {
  for (var i = 1; i < array.length; i++) {
    insert(array, i - 1, array[i]);
  }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log("Array after sorting:  " + array);
// [7, 9, 11, 22, 42, 88, 99]

var array = [11, 55, 0, 44, 33, 22, -99, 66];
insertionSort(array);
console.log("Array after sorting:  " + array);
// [-99, 0, 11, 22, 33, 44, 55, 66]
