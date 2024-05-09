const decodeTheRing = function (s, p) {
  // write your code here

  let sl = s.length;
  let pl = p.length;

  let result = true;

  if (sl != pl) {
    if (!p.includes("*")) {
      return false;
    }
  }

  if (p.includes("*")) {
    let str = p.split("*");
    const isPresent = str.lastIndexOf(str[i]) === str.length - 3;
    console.log(str);
  }

  if (p.includes("?")) {
    let str = p.split("?");
    console.log(str);
  }

  return result;
};

module.exports = decodeTheRing;
