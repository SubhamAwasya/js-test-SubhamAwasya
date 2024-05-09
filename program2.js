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
    const isPresentAtStart = s.startsWith(str[0]);
    const isPresentAtEnd = s.endsWith(str[1]);

    if(isPresentAtEnd)

    console.log("======================" + isPresentAtStart);
    console.log("======================" + isPresentAtEnd);
  }

  if (p.includes("?")) {
    let str = p.split("?");
    console.log(str);
  }

  return result;
};

module.exports = decodeTheRing;
