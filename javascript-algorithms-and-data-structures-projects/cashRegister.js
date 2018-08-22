function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let startingCash = 0.0;
  let currentCash;

  const cashEquiv = {
    ONE: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    DOLLAR: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    "ONE HUNDRED": 100.0
  };

  function findCashIndex(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === val) {
        return i;
      }
    }
  }

  console.log(findCashIndex(cid, "NICKEL"));

  function countMoney(moneyArr, currentAmt) {
    for (let i = 0; i < moneyArr.length; i++) {
      currentAmt += moneyArr[i][1];
    }
    return currentAmt.toFixed(2);
  }

  currentCash = countMoney(cid, startingCash);

  if (changeDue > currentCash) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);
