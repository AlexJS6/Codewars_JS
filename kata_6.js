https://www.codewars.com/kata/546f922b54af40e1e90001da
function alphabetPosition(text) {
    let my_text_array = [], text_string = text.toLowerCase();
    for (let i=0; i<text_string.length; i++) {
      if (text_string[i].match(/[a-zA-Z]/)) {
        my_text_array.push(text_string.charCodeAt(i) - 96);
      }
    }
    return my_text_array.join(' ');
}



https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
function duplicateCount(text){
    let string = text.toLowerCase(), my_char = '', my_number = 0, my_empty_arr = [];
    for (let z=0; z<text.length; z++) {
      for (let j=0; j<text.length; j++) {
        if (!my_empty_arr.includes(string[j]) && string[z] == string[j] && z !== j) {
          my_empty_arr.push(string[j]);
          my_number++;
        }
      }
    }
    return my_number;
}



https://www.codewars.com/kata/514b92a657cdc65150000006
function solution(number){
    let i =  0, my_int = 0;
      while(i<number) {
        if (i % 3 === 0 || i % 5 === 0 ) {
          my_int += i;
        }
        i++;
      }
    return my_int
}



https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
function cleanString(s) {
    my_array = s.split('');
    for (let i=0; i<my_array.length; i++) {
        let p = i-1;
        if(my_array[i] === '#' && i !== 0) {
            my_array.splice(i, 1);
            my_array.splice(p, 1);
            i = 0;
        }
        else if (my_array[i] === '#' && i === 0) {
          my_array.shift();
          i--;
        }
    }
    if (my_array[0] === '#') {
      my_array.shift();
    }
    return my_array.join('');
}



https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
function duplicateEncode(worde){
    let word = worde.toLowerCase();
    let test_arr = [], string = '';
    for (let i=0; i<word.length; i++) {
        for (let j=0; j<word.length; j++) {
            if (word[i] === word[j] && i != j && !test_arr.includes(word[i])) {
                test_arr.push(word[i]);
            }
        }
    }
    for (let k=0; k<word.length; k++) {
        if (test_arr.includes(word[k])) {
            string += ')';
        }
        else {
            string += '(';
        }
    }
    return string;
}



https://www.codewars.com/kata/55c45be3b2079eccff00010f
function order(words){
    let words_array = words.split(' ');
    let result = [];
    for (let i=1; i<words_array.length +1; i++) {
        //console.log(i);
        for (let j=0; j<words_array.length; j++) {
            if (words_array[j].includes(i)) {
                result.push(words_array[j]);
                break;
            }
        }
    }
    return result.join(' ');
}



https://www.codewars.com/kata/569d488d61b812a0f7000015
function dataReverse(data) {
    let result = [];
    let my_arr = [];
    for (let i=1; i<data.length +1; i++) {
        my_arr.unshift(data[i-1])
        if (i%8 === 0) {
            for (let k=0; k<my_arr.length; k++) {
                result.unshift(my_arr[k]);
            }
            my_arr = [];
        }
    }
    return result;
}



https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
    console.log(array);
    let new_array = array;
    let empty = [], k=0;
    while(k<new_array.length) {
        if (new_array[k] % 2 !== 0) {
            empty.push(new_array[k]);
        }
        k++;
    }
    empty.sort(function(a, b) { return a- b});
    for (let i=0; i<array.length; i++) {
        if (array[i] % 2 == 0 || array[i] == 0) {
            empty.splice(i, 0, array[i]);
        }
    }
    return empty;
}



https://www.codewars.com/kata/5878520d52628a092f0002d0
function stringTransformer(str) {
    let new_char, my_arr = [], word;
    RegExp = /[A-Z]/;
    let arr = str.split(' ');
    for (let i=0; i<arr.length; i++) {
        word = arr[i].split('');
        for (let j=0; j<word.length; j++) {
            if (RegExp.test(word[j])) {
                console.log(word[j]);
                new_char = word[j].toLowerCase();
                console.log(new_char);
                console.log(word);
                word.splice(j, 1, new_char);
                console.log(j);
                console.log(word);
            }
            else if (RegExp.test(word[j]) == false) {
                new_char = word[j].toUpperCase();
                word.splice(j, 1, new_char);
            }
        }
        my_arr.unshift(word.join(''));
    }
    return my_arr.join(' ');
}


https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
function inArray(array1,array2){
    return array1.filter(ending => {
      return array2.some(word => word.includes(ending));
    }).sort();
}


https://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript
function createPhoneNumber(numbers){
    let result = '';
    result += `(${numbers[0]}${numbers[1]}${numbers[2]})`;
    result += ` ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
    return result;
}



