// Should recursively sort the subarray[p..r]

// Partition given array and return index of pivot
var partition = function(array, p, r) {
  var array0 = array;
  var index1 = p;
  var index2 = r;

  var swap = function(array0, index1, index2) {
    var temp = array0[index1];
    array0[index1] = array0[index2];
    array0[index2] = temp;
  };

  var i = index1;

  for (var s = index1; s < index2; s++) {
    if (array0[s] <= array0[index2]) {
      swap(array0, s, i);
      i++;
    }
  }
  swap(array0, index2, i);
  return i;

}

var quickSort = function(array, p, r) {
  if (p < r) {
    var q = partition(array, p, r);
    quickSort(array, p, q - 1);
    quickSort(array, q + 1, r);
  }
};

var array = [14, 0, 7, 3, 12, 9, -4, 11, 6, 2];
quickSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [-4,0,2,3,6,7,9,11,12,14]);
