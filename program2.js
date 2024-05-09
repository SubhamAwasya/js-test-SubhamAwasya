const decodeTheRing = function (s, p) {
  // write your code here

  let sl = s.length;
  let pl = p.length;

  let i = 0;
  let j = 0;

  while (sl > 0) {
    if (sl[i]) {
      sl--;
      pl--;
    }
  }
  console.log("======" + s[1]);
};

module.exports = decodeTheRing;
