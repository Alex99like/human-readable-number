module.exports = function toReadable (number) {
    let arr = String(number).split('');
    const numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
    };

    if (number <= 20) {
      return numbers[number];
    }

    if (number >= 20 && number < 100) {
       let num = Number(arr[0]) * 10;
       return numbers[num] + ' ' + numbers[Number(arr[1])]
    }

    if (number > 100 && number < 1000) {
        let num = Number(arr[1]) * 10;
        return numbers[Number(arr[0])] + ' ' + numbers[100] + ' ' + numbers[Number(arr[1])] + ' '  + numbers[Number(arr[2])]
     }
  }
  
