function sevenAte9(str) {

  let strToEat = str;

  let withoutNines = "";

  for (let i = 0; i < strToEat.length; i++) {
    if (str[i] == 7 && str[i + 1] == 9 && str[i + 2] == 7) {
      withoutNines = withoutNines + strToEat[i];
      i++;
    } else {
      withoutNines = withoutNines + strToEat[i];
    }
  }

  return withoutNines;
}
console.log(sevenAte9('797979779791687351256387'));
