function twoSum(numbers, target) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      console.log(numbers[i], numbers[j]);
      if (numbers[i] + numbers[j] == target && i != j) {
        answer = [i, j];
      } else if (answer == []) {
        i++;
      }
    }
  }
  return answer;
}
