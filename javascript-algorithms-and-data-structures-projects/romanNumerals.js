function convertToRoman(num) {
    const decNum = [
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        10, 20, 30, 40, 50, 60, 70, 80, 90,
        100, 200, 300, 400, 500, 600, 700, 800, 900,
        1000, 2000, 3000
    ];

    const romNumArr = [
        "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX",
        "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
        "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
        "M", "MM", "MMM"
    ];

    let tens, hundreds, thousands, numIndex;

    let romanNumeral = "";

    while (num >= 10) {
        if (num >= 1000) {
            console.log(num);
            thousands = Math.floor(num / 1000) * 1000;
            console.log(thousands);
            numIndex = decNum.indexOf(thousands);
            console.log(numIndex);
            romanNumeral += romNumArr[numIndex];
            console.log(romanNumeral);
            num = num % 1000;
            console.log(num);
        }
        else if (num >= 100) {
            hundreds = Math.floor(num / 100) * 100;
            numIndex = decNum.indexOf(hundreds);
            romanNumeral += romNumArr[numIndex];
            num = num % 100;
        }
        else if (num >= 10) {
            tens = Math.floor(num / 10) * 10;
            numIndex = decNum.indexOf(tens);
            romanNumeral += romNumArr[numIndex];
            num = num % 10;
        }
    }

    if (num > 0) {
        numIndex = decNum.indexOf(num);
        romanNumeral += romNumArr[numIndex];
    }
    else {
        return romanNumeral
    }

    return romanNumeral;
}

convertToRoman(1000);
