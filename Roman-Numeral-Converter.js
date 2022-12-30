function convertToRoman(num) {
    let result = "";
let ones = num % 10;
num = Math.floor(num / 10);
let tens = num % 10;
num = Math.floor(num / 10);
let hundreds = num % 10;
num = Math.floor(num / 10);
let thousands = num % 10;
let array = [ones, tens, hundreds, thousands]
  let ten = "X"; let one = "I"; let five = "V"; let fifty = "L"; let hundred = "C"; let fivehundred = "D";
    let thousand = "M";
    //thousands below
    if (thousands > 0) {
        if (thousands < 4) {
            for (let p = 0; p < thousands; p++) {
                result += thousand;
            }
        }
    }
    //hundreds below 
    if (hundreds > 0) {
        if (hundreds < 4) {
            for (let m = 0; m < hundreds; m++) {
                result += hundred;
            }
        }
        if (hundreds > 3 && hundreds < 5) {
            result += hundred;
            result += fivehundred;
        }
        if (hundreds > 4 && hundreds < 6) {
            result += fivehundred;
        }
        if (hundreds > 5 && hundreds < 9) {
            result += fivehundred;
            let newHundreds = hundreds - 5;
            for (let n = 0; n < newHundreds; n++) {
                result += hundred;
            }
        }
        if (hundreds > 8 && hundreds < 10) {
            result += hundred;
            result += thousand;
        }
    }
    //tens below
    if (tens < 100) {
        if (tens < 4) {
         
            for (let i = 0; i < tens; i++) {
                result += ten;
            }
          }
        if (tens > 3 && tens < 5) {
            result += ten;
            result += fifty;
        }
        if (tens > 4 && tens < 6) {
            result += fifty;
        }
        if (tens > 5 && tens < 9) {
            result += fifty;
            let newTens = tens - 5; 
            for (let i = 0; i < newTens; i++) {
                result += ten;
            }
        }
        if (tens > 8 && tens < 10) {
            result += ten;
            result += hundred;
        }
    }
    //ones below
    if (ones > 0) {
       if (ones < 100) {
            if (ones < 4) {
                for (let j = 0; j < ones; j++) {
                   result += one;
                }
            }
            if (ones > 3 && ones < 5) {
                result += one;
                result += five;
            }
            if (ones >4 && ones < 6) {
                result += five;
            }
            if (ones > 5 && ones < 9) {
                result += five;
                let newOnes = ones - 5;
                for (let k = 0; k < newOnes; k++) {
                    result += one;
                }
            }
            if (ones > 8 && ones < 10) {
                result += one;
                result += ten;
            }
        }
    } 
    return result;
   }
   
   console.log(convertToRoman(1023));