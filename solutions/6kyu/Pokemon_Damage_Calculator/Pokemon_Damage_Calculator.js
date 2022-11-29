function calculateDamage(yourType, opponentType, attack, defense) {
  let damage = 0;
  let effectiveness = 0;

  if (yourType == "fire" && opponentType == "grass") {
    effectiveness = 2;
  } else if (yourType == "fire" && opponentType == "water") {
    effectiveness = 0.5;
  } else if (yourType == "fire" && opponentType == "electric") {
    effectiveness = 1;
  } else if (yourType == "fire" && opponentType == "fire") {
    effectiveness = 0.5;
  } else if (yourType == "water" && opponentType == "grass") {
    effectiveness = 0.5;
  } else if (yourType == "water" && opponentType == "water") {
    effectiveness = 0.5;
  } else if (yourType == "water" && opponentType == "electric") {
    effectiveness = 0.5;
  } else if (yourType == "water" && opponentType == "fire") {
    effectiveness = 2;
  } else if (yourType == "grass" && opponentType == "grass") {
    effectiveness = 0.5;
  } else if (yourType == "grass" && opponentType == "water") {
    effectiveness = 2;
  } else if (yourType == "grass" && opponentType == "electric") {
    effectiveness = 1;
  } else if (yourType == "grass" && opponentType == "fire") {
    effectiveness = 0.5;
  } else if (yourType == "electric" && opponentType == "grass") {
    effectiveness = 1;
  } else if (yourType == "electric" && opponentType == "water") {
    effectiveness = 2;
  } else if (yourType == "electric" && opponentType == "electric") {
    effectiveness = 0.5;
  } else if (yourType == "electric" && opponentType == "fire") {
    effectiveness = 1;
  }

  damage = 50 * (attack / defense) * effectiveness;

  return damage;
}
