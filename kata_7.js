https://www.codewars.com/kata/583f158ea20cfcbeb400000a
function arithmetic(a, b, operator){
    if (operator == "add") {
      return a + b;
    } else if (operator == "subtract") {
      return a - b;
    } else if (operator == "multiply") {
      return a * b;
    } else if (operator == "divide") {
      return a/b;
    }
}


https://www.codewars.com/kata/5467e4d82edf8bbf40000155
function descendingOrder(n){
    let my_arr = n.toString().split('');
    my_arr.sort(function(a, b) {
      return b - a;
    })
    let myString = my_arr.join('');
    return Number(myString);
}


https://www.codewars.com/kata/59706036f6e5d1e22d000016
function wordsToMarks(string){
    let my_result = 0;
    for (let i=0; i<string.length; i++) {
      my_result += string.charCodeAt(i) - 96;
    }
    return my_result;
}



https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(nums) {
    let from_low = nums.split(' '), from_high = nums.split(' '), empty_arr = [];
    from_low.sort(function(a, b) {
        return a-b;
    })
    from_high.sort(function(a, b) {
        return b-a;
    })
    empty_arr.push(from_high[0], from_low[0])
    return empty_arr.join(' ');
}



https://www.codewars.com/kata/54c27a33fb7da0db0100040e
var isSquare = function(n){
    let i = n, result = false;
  for(let j = 0; j <= i; j++) {
    if (j*j === n) {
        result = true;
        break;
    }
    else {
        result = false;
    }
  }
  return result;
}



https://www.codewars.com/kata/55f2b110f61eb01779000053
function getSum( a,b )
{
  let count = 0;
  if (a < b) {
    while(a <= b) {
      count += a;
      a++;
    }
    return count;
  } 
  else if(a > b) {
    while(b <= a) {
      count += b;
      b++;
    }
    return count;
  }
  else if(a === b) {
    return a;
  }
}



https://www.codewars.com/kata/5412509bd436bd33920011bc
// return masked string
function maskify(cc) {
    let my_arr = cc.split('');
    let mini = 4;
    let i = 0;
    if (mini<cc.length) {
      while (mini < cc.length) {
        my_arr.splice(i, 1, '#');
        mini++;
        i++;
      }
      return my_arr.join('');
    }
    else {
      return my_arr.join('');
    }
}



https://www.codewars.com/kata/59f11118a5e129e591000134
function repeats(arr) {
    let newArr = [];
    let realArr = [];
    for (let i=0; i<arr.length; i++) {
        if (newArr.includes(arr[i])) {
            realArr.push(arr[i]);
        } else {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    console.log(realArr);
    if (newArr.length > 2) {
        my_loop();
    }
    if (newArr.length === 2) {
        console.log(newArr[0] + newArr[1]);
        return newArr[0] + newArr[1];
    }
    function my_loop() {
        for (let j=0; j<newArr.length; j++) {
            if (realArr.includes(newArr[j])) {
                newArr.splice(j, 1);
            }
        }
        if (newArr.length > 2) {
            my_loop();
        }
    }

}
repeats([5, 17, 18, 11, 13, 18, 11, 13]);



https://www.codewars.com/kata/5a092d9e46d843b9db000064
function solve(arr){
    let negatif = [];
    let positif = [];
    let result = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            positif.push(arr[i]);
        }
        if (arr[i] < 0) {
            negatif.push(arr[i]);
        }
    }
    if (negatif.length > positif.length) {
        sort_it(negatif, positif);
    } else {
        sort_it(positif, negatif);
    }
    function sort_it(big, small) {
        for (let j = 0; j<big.length; j++) {
            if (!small.includes(-big[j])) {
                result.push(big[j]);
            }
        }
    }
    return result[0];
    
};



https://www.codewars.com/kata/59c62f1bdcc40560a2000060
function solve(a){
    let odd = [];
    let even = [];
    let i = 0;
    while (i < a.length) {
        if (Number.isInteger(a[i])) {
            if (a[i] % 2 === 0) {
                even.push(a[i]);
            }
            else {
                odd.push(a[i]);
            }
        }
        i++;
    }
    return even.length - odd.length;
};



https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
function filter_list(l) {
    let result = [];
    for (let i=0; i<l.length; i++) {
        if (typeof l[i] == "number") {
            result.push(l[i]);
        }
    }
    return result;
}