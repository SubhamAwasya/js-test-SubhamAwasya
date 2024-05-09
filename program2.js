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
    const isPresent = "".startsWith(str[0], 1);
    const isPresent = "".startsWith(str[0], 1);

    console.log("======================" + isPresent);
  }

  if (p.includes("?")) {
    let str = p.split("?");
    console.log(str);
  }

  return result;
};

module.exports = decodeTheRing;
