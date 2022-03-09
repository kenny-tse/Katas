// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

const romanToInt = (someString) => {

  const romanObj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const romanSpecial = { IV: 4, IX: 9, XL: 40, XC: 90, CD: 400, CM: 900 };

  let numberOutput = 0;

  for (let x = 0; x < someString.length; x++) {

    let romanEval = someString[x] + someString[x + 1];

    if (romanSpecial[romanEval]) {
      numberOutput += romanSpecial[romanEval];
      x++;
      continue;
    }

    numberOutput += romanObj[someString[x]]
  }
  return numberOutput;
}

console.log(romanToInt("LVIII"))