function goodVsEvil(good, evil) {
  let valueGood = 0;
  let valueEvil = 0;

  let keysGood = [];
  let keysEvil = [];

  let good1 = {
    Hobbits: 1,
    Men: 2,
    Elves: 3,
    Dwarves: 3,
    Eagles: 4,
    Wizards: 10,
  };
  let evil1 = {
    Orcs: 1,
    Men: 2,
    Wargs: 2,
    Goblins: 2,
    Uruk_Hai: 3,
    Trolls: 5,
    Wizards: 10,
  };

  good = good.split(" ");
  let newgood = [];
  for (let j = 0; j < good.length; j++) {
    newgood[j] = Number(good[j]);
  }

  evil = evil.split(" ");
  let newevil = [];
  for (let k = 0; k < evil.length; k++) {
    newevil[k] = Number(evil[k]);
  }

  for (let key in good1) {
    keysGood.push(good1[key]);
  }

  for (let key in evil1) {
    keysEvil.push(evil1[key]);
  }

  for (let i = 0; i < good.length; i++) {
    if (good[i] > 0) {
      valueGood += newgood[i] * keysGood[i];
    }
  }
  for (let t = 0; t < evil.length; t++) {
    if (evil[t] > 0) {
      valueEvil += newevil[t] * keysEvil[t];
    }
  }

  if (valueEvil > valueGood) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else if (valueGood > valueEvil) {
    return "Battle Result: Good triumphs over Evil";
  } else if ((valueEvil = valueGood)) {
    return "Battle Result: No victor on this battle field";
  } else {
    return "Battle Result: No victor on this battle field";
  }
}
