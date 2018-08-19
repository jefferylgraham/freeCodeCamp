function palindrome(str) {
  // Good luck!
  let newStr = '';

  for (let i = 0; i < str.length; i++) {
    newStr += str[i].toLowerCase();
  }

  //replace NONalphanumeric chars with ""
  let alphaNumStr = newStr.replace(/[^0-9a-z]/gi, "");

  //split string into array, then reverse the array, the join the reversed
  //array into a string
  let reverseAlphaNumStr = alphaNumStr.split("").reverse().join("");

  return alphaNumStr === reverseAlphaNumStr;

}

palindrome("eye");
