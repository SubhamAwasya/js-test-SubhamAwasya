const decodeTheRing = function (s, p) {
  // write your code here

  let sl = s.length;
  let pl = p.length;

  let i = 0;
  let j = 0;

  let k = 0;

  let result = true;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == p[i]) {
      i++;
      j++;
    } else if (p[i] == "*") {
      k = i + 1;
      while () {

      }
    } else if (p[i] == "?") {
    }
  }



  return result;
};

module.exports = decodeTheRing;
