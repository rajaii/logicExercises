//from leetcode easy: https://leetcode.com/problems/angle-between-hands-of-a-clock/

var angleClock = function (h, m) {
  //count to the h hands degrees
  let degree = 0;
  let x;
  if (h === 12) {
    x = (m / 60) * 30;
  } else {
    x = h * 30 + (m / 60) * 30;
  }
  //count to the minutes hand degrees from where h is
  let y;
  if (m === 0 || m === 60) {
    y = 0;
  } else {
    y = 30 * (m / 5);
  }

  //make x or y depending on which is first 0 and just count degrees out from there
  if (x < y) {
    for (let i = x; i < y; i += 0.01) {
      degree += 0.01;
    }
  } else if (y < x) {
    for (let i = y; i < x; i += 0.01) {
      degree += 0.01;
    }
  } else {
    degree = 0;
  }
  if (degree > 180) {
    const d = degree.toFixed(1);
    return 360 - parseFloat(d);
  }

  const d = degree.toFixed(1);

  return parseFloat(d);
};

//edge cases:
//?'s: decimals given?

//PSEUDO:
//transform hours into degrees
//start at either hand countout degrees, subtract that from 360

// let x = h * 30 + ((m / 60) * 30)
// 360 - x + (360 - m * 30)

//count from h to m degree
//if > 180 return 360 - ^
//else return ^
