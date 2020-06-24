var numbers = [1, 2, 3, 4];

function transform(collection, transFunc) {
  var data = collection.map(transFunc);
  console.log(data);
}

transform(numbers, function (num) {
  return num * 2;
});
