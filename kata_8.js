https://www.codewars.com/kata/50654ddff44f800200000004
function multiply(a, b){
    return a * b
}


https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function solution(str) {
    let solutionSplit = str.split("");
    let solutionReverse = solutionSplit.reverse();
    let solutionJoin = solutionReverse.join("");
    return solutionJoin;
}


https://www.codewars.com/kata/53369039d7ab3ac506000467
function boolToWord( bool ){
    if ( bool === true) {
      return 'Yes';
    } else if ( bool === false) {
      return 'No';
    }
}



https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
function removeChar(str){
    const finalChar = str.slice(1, -1);
    return finalChar
};



https://www.codewars.com/kata/5265326f5fda8eb1160004c8
function numberToString(num) {
    return num.toString();
}


https://www.codewars.com/kata/57356c55867b9b7a60000bd7
function basicOp(operation, value1, value2)
{
  if (operation === '+') {
    return Number(value1 + value2);
  } else if (operation === '-') {
    return Number(value1 - value2);
  } else if (operation === '*') {
    return Number(value1 * value2);
  } else if (operation === '/') {
    return Number(value1 / value2);
  }
}


https://www.codewars.com/kata/5583090cbe83f4fd8c000051
function digitize(n) {
    const arrayOfDigits = Array.from(String(n), Number);
    return arrayOfDigits.reverse();
}


https://www.codewars.com/kata/544675c6f971f7399a000e79
var stringToNumber = function(str){
    return Number(str);
}


https://www.codewars.com/kata/56dec885c54a926dcd001095
function opposite(number) {
    return -number;
}



https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7
function makeUpperCase(str) {
    return str.toUpperCase();
}



https://www.codewars.com/kata/515e188a311df01cba000003
function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
      case 5:
        name = 'Jupiter'
        break;
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return name;
}


https://www.codewars.com/kata/588417e576933b0ec9000045
function seatsInTheater(nCols, nRows, col, row) {
    let totalCols = (nCols - col);
    let totalRows = (nRows - row);
    return (totalCols * totalRows) + totalRows;
}



https://www.codewars.com/kata/56dae9dc54c0acd29d00109a
function main(verb, main) {
    return verb + main;
}



https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
function repeatStr (n, s) {
    let arr = [];
    for (let i=0; i<n; i++) {
      arr.push(s);
    }
    return arr.join('');
}



https://www.codewars.com/kata/56a25ba95df27b7743000016
function validateCode (code) {
    let reg = /^[1-3]/;
    return reg.test(code);
}



https://www.codewars.com/kata/56a946cd7bd95ccab2000055
function lowercaseCount(str){
    let reg = /[a-z]/;
    let  result = 0;
      for (let i=0; i<str.length; i++) {
        if (reg.test(str[i]) === true) {
          result++;
        }
      }
    return result;
}



https://www.codewars.com/kata/571d42206414b103dc0006a1
function arr(int) {
    let result = [];
    for (let i=0; i<int; i++) {
        result.push(i);
    }
    return result;
}





  