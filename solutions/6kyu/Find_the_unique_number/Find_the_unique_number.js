function findUniq(arr) {
  arr = arr.sort();
  if (arr[1] === arr[0]) {
    return arr[arr.length - 1];
  }
  return arr[0];
}
