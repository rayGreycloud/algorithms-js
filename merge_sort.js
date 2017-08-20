// Takes in array with 2 sorted subarrays
// from [p..q] and [q+1..r] and merges array
var merge = function(array, p, q, r) {
  var lowHalf = [];
  var highHalf = [];
  var k = p;
  var i;
  var j;

  for (i = 0; k <= q; i++, k++) {
      lowHalf[i] = array[k];
  }
  for (j = 0; k <= r; j++, k++) {
      highHalf[j] = array[k];
  }

  k = p;
  i = 0;
  j = 0;

// Repeatedly compare lowest untaken element in
//  lowHalf with lowest untaken element in highHalf
//  and copy lower of the two back into array
  while (i < lowHalf.length && j < highHalf.length) {
    if (lowHalf[i] < highHalf[j]) {
      array[k] = lowHalf[i];
      i++;
    } else {
      array[k] = highHalf[j];
      j++;
    }

    k++;
  }

// Once one of lowHalf and highHalf has been fully copied
//  back into array, copy the remaining elements from the
//  other temporary array back into the array
  while (i < lowHalf.length) {
    array[k] = lowHalf[i];
    i++;
    k++;
  }

  while (j < highHalf.length) {
    array[k] = highHalf[j];
    j++;
    k++;
  }
};

// Takes in array and recursively sorts it
var mergeSort = function(array, p, r) {
  if (p < r) {
    // Determine dividing point
    var q = Math.floor((p + r) / 2);
    // Sort first half
    mergeSort(array, p, q);
    // Sort second half
    mergeSort(array, q + 1, r);

    console.log("Array after sorting: " + array);
    // Merged sorted halves
    merge(array, p, q, r);
  }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length-1);
console.log("Array after merging: " + array);
