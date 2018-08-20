function telephoneCheck(str) {
  // Good luck!
  // let numRegex1 = /\d{3}-\d{3}-\d{4}/;
  // let numRegex2 = /\(?\d{3}\)?.?\d{3}-\d{4}/;
  // let numRegex3 = /\(?\d{3}\)?.?\d{3}-\d{4}/;
  // let numRegex4 = /\(?\d{3}\)?.?\d{3}.?\d{4}/;
  // let numRegex5 = /\(?\d{3}\)?.?\d{3}.?\d{4}/;

  let numRegex6 = /^(?=1(?=[\s]?(\(\d{3}\)|\(\d{3}\)|\d{3}-|\d{3})\s?(\d{3}|\d{3}-|\d{3})\s?(\d{4}))|(\(\d{3}\)|\(\d{3}\)|\d{3}-|\d{3})\s?(\d{3}|\d{3}-|\d{3})\s?(\d{4})$)/;


  let result = numRegex6.test(str);

  console.log(result);

  return result;
}

telephoneCheck("555-555-5555");
