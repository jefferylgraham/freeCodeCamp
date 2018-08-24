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
    ONE: 1.00,
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
    ONE: 0,
    FIVE: 0,
    TEN: 0,
    TWENTY: 0,
    "ONE HUNDRED": 0
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
    return parseFloat(cashRemoved);
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

  while (cashIndex > 0) {
    if (cid[cashIndex][1] > 0) {
      changeGiven = removeCash(cid, cashIndex);
      //remove change from drawer
      changeDue = changeDue.toFixed(2) - changeGiven.toFixed(2);
      if (changeDue.toFixed(2) < changeGiven.toFixed(2)) {
        cashIndex--;
      }
      console.log(changeDue);
    }
    else {
      cashIndex--;
    }
  }

  for (let prop in changeGivenObj) {
    if (changeGivenObj[prop] === 0) {
      delete changeGivenObj[prop];
    }
  }

  let result = Object.keys(changeGivenObj).map(function(key) {
    return [key, changeGivenObj[key]]
  });

  console.log(cid);

  return {status: "OPEN", change: [...result]};
  
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
