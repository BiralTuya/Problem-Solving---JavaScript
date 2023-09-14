function addAllParameters() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return console.log(sum);
}

addAllParameters(1, 2, 3, 4, 5); // 15