var fruits = [
  { id: 1, name: "Banana", color: "Yellow" },
  { id: 2, name: "Apple", color: "Red" },
  { id: 3, name: "Orange", color: "Orange" },
];

console.log(fruits[2]["name"]);

function searchbyName(array, name) {
  array.forEach(function (info) {
    if (info.name.toLowerCase() === name.toLowerCase()) {
      console.log(info);
    }
  });
}

function searchbyKey(array, key, value) {
  array.forEach(function (info) {
    if (info[key].toLowerCase() === value.toLowerCase()) {
      console.log(info);
    }
  });
}

searchbyName(fruits, "orange");

searchbyKey(fruits, "color", "red");
