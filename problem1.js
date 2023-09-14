function arrayReplace (inputArray, elemToReplace, substitutionElem) {
  return inputArray.map((elem) => {
    if (elem === elemToReplace) {
      return substitutionElem
    }
    return elem
  })
  console.log(inputArray);
}

arrayReplace([1, 2, 1], 1, 3);