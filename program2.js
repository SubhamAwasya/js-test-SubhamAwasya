const decodeTheRing = function (s, p) {
  // write your code here

  let sl = s.length;
  let pl = p.length;

  if (sl != pl) {
    if (!p.includes("*")) {
      return false;
    }
  }

  if (p.includes("*")) {
    let str = p.split("*");
    const isPresentAtStart = s.startsWith(str[0]);
    const isPresentAtEnd = s.endsWith(str[1]);

    if (isPresentAtStart && isPresentAtEnd) {
      return true;
    } else {
      return false;
    }
  }

  if (p.includes("?")) {
    if (s.length == p.length) {
      let str = p.split("?");
      const isPresentAtStart = s.startsWith(str[0]);
      const isPresentAtEnd = s.endsWith(str[1]);

      if (isPresentAtStart && isPresentAtEnd) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return false;
};

module.exports = decodeTheRing;
