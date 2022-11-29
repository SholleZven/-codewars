function humanReadable(seconds) {
  let answer;
  let xx = 0;
  let yy = 0;
  let zz = 0;
  if (seconds < 60) {
    zz = seconds;
  } else if (seconds >= 60 && seconds < 3600) {
    yy = Math.floor(seconds / 60);
    zz = (seconds / 60 - Math.floor(seconds / 60)) * 60;
  } else if (seconds >= 3600 && seconds <= 359999) {
    xx = Math.floor(seconds / 3600);
    yy = Math.floor((seconds / 3600 - Math.floor(seconds / 3600)) * 60);
    zz =
      ((seconds / 3600 - Math.floor(seconds / 3600)) * 60 -
        Math.floor((seconds / 3600 - Math.floor(seconds / 3600)) * 60)) *
      60;
  }
  if (zz % 1 > 0.999999 && zz % 1 < 1) {
    zz = Math.ceil(zz);
  } else {
    zz = Math.floor(zz);
  }
  if (zz == 60) {
    zz = 0;
    yy++;
  }

  if (xx < 10) {
    xx = "0" + xx;
  }
  if (yy < 10) {
    yy = "0" + yy;
  }
  if (zz < 10) {
    zz = "0" + zz;
  }
  answer = xx + ":" + yy + ":" + zz;
  return answer;
}
