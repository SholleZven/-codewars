function isValidWalk(walk) {
  let answer;
  let value = 1;

  if (walk.length == 10) {
    for (let i = 9; i < walk.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (walk[i] == "n" && walk[j] == "s") {
          value -= 1;
        } else if (walk[i] == "n" && walk[j] == "n") {
          value += 1;
        } else if (walk[i] == "s" && walk[j] == "n") {
          value -= 1;
        } else if (walk[i] == "s" && walk[j] == "s") {
          value += 1;
        } else if (walk[i] == "w" && walk[j] == "e") {
          value -= 1;
        } else if (walk[i] == "w" && walk[j] == "w") {
          value += 1;
        } else if (walk[i] == "e" && walk[j] == "w") {
          value -= 1;
        } else if (walk[i] == "e" && walk[j] == "e") {
          value += 1;
        }
      }
    }
  } else {
    answer = false;
    console.log(answer);
  }
  if (value == 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
