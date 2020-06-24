function sortBy(array, key) {
  var tempArray = array.slice();
  for (var i = 0; i < tempArray.length; i++) {
    var lowest = i;
    for (var j = i; j < tempArray.length; j++) {
      if (arr[j][key] < arr[lowest][key]) lowest = j;
    }

    if (lowest !== i) {
      var temp = tempArray[lowest];
      tempArray[lowest] = tempArray[i];
      tempArray[i] = temp;
    }
  }
  return tempArray;
}

var sorted = sortBy(arr, "name");

console.log(sorted);
