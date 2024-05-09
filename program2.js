const decodeTheRing = function (s, p) {
  // write your code here

  let sl = s.length;
  let pl = p.length;

  let i = 0;
  let j = 0;

  while (sl > 0) {
    if (s[i] == p[i]) {
      i++;
      j++;
    } else if (p[i] == "*") {
    }
    else if(){
      
    }
  }
  console.log("======" + s[1]);
};

module.exports = decodeTheRing;
