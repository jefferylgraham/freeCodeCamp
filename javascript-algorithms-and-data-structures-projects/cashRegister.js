function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  let startingCash = 0.0;
  let currentCash, cashIndex, denomination;
  let changeGiven = 0.0;
  let exactChange = 0.0;

  // const cashEquiv = {
  //   ONE: 0.01,
  //   NICKEL: 0.05,
  //   DIME: 0.10,
  //   QUARTER: 0.25,
  //   DOLLAR: 1.00,
  //   FIVE: 5.00,
  //   TEN: 10.00,
  //   TWENTY: 20.00,
  //   "ONE HUNDRED": 100.00
  // }

  function findCashIndex(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] === val) {
        return i;
      }
    }
  }

  function countMoney(moneyArr, currentAmt) {
    for (let i = 0; i < moneyArr.length; i++) {
      currentAmt += moneyArr[i][1];
    }
    return currentAmt.toFixed(2);
  }

  // currentCash = countMoney(cid, startingCash);

  switch (true) {
    case changeDue > 100.0:
      denomination = "ONE HUNDRED";
      break;
    case changeDue > 20.0:
      denomination = "TWENTY";
      break;
    case changeDue > 10.0:
      denomination = "TEN";
      break;
    case changeDue > 5.0:
      denomination = "Five";
      break;
    case changeDue > 1.0:
      denomination = "ONE";
      break;
    case changeDue > 0.25:
      denomination = "QUARTER";
      break;
    case changeDue > 0.1:
      denomination = "DIME";
      break;
    case changeDue > 0.05:
      denomination = "NICKEL";
      break;
    default:
      denomination = "PENNY";
  }

  cashIndex = findCashIndex(cid, denomination);
  let exactChangeArr = cid.slice(0, cashIndex + 1);
  exactChange = countMoney(exactChangeArr, exactChange);

  if (changeDue > exactChange) {
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
