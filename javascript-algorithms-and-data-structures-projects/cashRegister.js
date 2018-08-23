function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;

  let changeGiven = 0.00; 
  let exactChange = 0.00;
  let currentCash, cashIndex, denomination;
  let exactChangeArr = [];
 
  const cashEquiv = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.10,
    QUARTER: 0.25,
    DOLLAR: 1.00,
    FIVE: 5.00,
    TEN: 10.00,
    TWENTY: 20.00,
    "ONE HUNDRED": 100.00
  }

  const changeGivenObj = {
    PENNY: 0,
    NICKEL: 0,
    DIME: 0,
    QUARTER: 0,
    DOLLAR: 0,
    FIVE: 0,
    TEN: 0,
    TWENTY: 0,
    "ONE HUNDRED": 0
  }

  function convert(num) {
    return Number.parseFloat(num).toFixed(2);
  }

  function findCashIndex(arr, val) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][0]  === val) {
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

  function removeCash(arr, index) {
    let cashRemoved = cashEquiv[arr[index][0]].toFixed(2);
    arr[index][1] -= cashRemoved;
    let newVal = parseFloat(arr[index][1].toFixed(2));
    arr[index][1] = newVal;
    return cashRemoved;
  }

  function findDenomination(change) {
    switch(true) {
      case (change > 100.00):
        return "ONE HUNDRED";
      case (change > 20.00):
        return "TWENTY";
      case (change > 10.00):
        return "TEN";
      case (change > 5.00):
        return "FIVE";
      case (change > 1.00):
        return "ONE";
      case (change > 0.25):
        return "QUARTER";
      case (change > 0.10):
        return "DIME";
      case (change > 0.05):
        return "NICKEL";
      default:
        return "PENNY";
    }
  }

  denomination = findDenomination(changeDue);
  cashIndex = findCashIndex(cid, denomination);
  exactChangeArr = cid.slice(0, cashIndex + 1);
  exactChange = countMoney(exactChangeArr, exactChange);

  if (changeDue > exactChange) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }

  currentCash = parseFloat(countMoney(cid, 0));
  if (currentCash === changeDue) {
    return {status: "CLOSED", change: cid};
  }
  
  // while (changeDue > 0) {
  //   if ((changeDue.toFixed(2) % cashEquiv[denomination] !== changeDue.toFixed(2)) &&
  //     (cid[cashIndex][1] !== 0)) {
  //       changeGiven = removeCash(cid, cashIndex);
  //       changeGivenObj[denomination] += parseFloat(changeGiven);
  //       let newVal = convert(changeGivenObj[denomination])
  //       changeDue -= changeGiven;
  //     }
  //   else {
  //     cashIndex--;
  //     if (cashIndex < 0) {
  //       break;
  //     }
  //     denomination = cid[cashIndex][0];
  //   }
  // }
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
