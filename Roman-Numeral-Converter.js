function convertToRoman(num) {
    let result = "";
    let throusands = Math.floor(num / 1000);
    let hundreds = Math.floor(num / 100);
    let tens = Math.floor(num / 10);
    let ones = num % 10;
    function splitNumber(num) {}
    let ten = "X"; let one = "I"; let five = "V"; let fifty = "L"; let hundred = "C"; let fivehundred = "D";
    let thousand = "M";
    console.log(tens);
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
    console.log(result)
    return result;
   }
   
   console.log(convertToRoman(36));