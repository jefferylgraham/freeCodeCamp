function rot13(str) { // LBH QVQ VG!
  const alphabet = [
    "A", "B", "C", "D", "E",
    "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O",
    "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"
  ];

  let newStr = "";
  let num;

  for (let i = 0; i < str.length; i++) {
    num = str.charCodeAt(i);
    if (alphabet.includes(str[i])) {
      if ((num + 13) < 91) {
        newStr += String.fromCharCode(num + 13);
      }
      else {
        newStr += String.fromCharCode((num + 13) - 26);
      }
    }
    else {
      newStr += str[i];
    }
  }

  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
