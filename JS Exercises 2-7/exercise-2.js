function renderPattern(rows) {
  for (i = rows; i >= 0; i--) {
    char = "";
    for (j = 1; j <= i; j++) {
      char += "* ";
    }
    console.log(char);
  }
}

renderPattern(5);
