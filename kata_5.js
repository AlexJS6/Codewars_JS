https://www.codewars.com/kata/526989a41034285187000de4
function ipsBetween(start, end){
    let first = start.split('.');
    let second = end.split('.');
    let response = 0;

    chain0 = second[0] - first[0];
    chain1 = second[1] - first[1];
    chain2 = second[2] - first[2];
    chain3 = second[3] - first[3];    

    let one = chain0 * 256 * 256 * 256;
    let two = chain1 * 256 * 256;
    let third = chain2 * 256;
    let fourth = chain3;

    response = one + two + third + fourth;

    
    return response;
}



https://www.codewars.com/kata/52597aa56021e91c93000cb0
var moveZeros = function(arr) {
    //let my_arr = JSON.stringify(arr);
    let new_arr = [];
    for (let i=0; i<arr.length; i++) {
      if (arr[i] === 0) {
        new_arr.push(arr[i]);
        arr.splice(i, 1);
        i--;
      }
    }
    for (let j=0; j<new_arr.length; j++) {
        arr.push(new_arr[j]);
    }
    return arr;
}



https://www.codewars.com/kata/520b9d2ad5c005041100000f
function pigIt(str){
  let my_arr = str.split(' '), result = [];
  console.log(my_arr);
  for (let i=0; i<my_arr.length; i++) {
      if (my_arr[i] == '!' || my_arr[i] == '?'|| my_arr[i] == '.') {
        result.push(my_arr[i]);
        return result.join(' ');  
      }
      let new_char = my_arr[i][0];
      let my_new_arr = my_arr[i].split('');
      my_new_arr.shift();
      my_new_arr.push(new_char);
      my_new_arr.push('ay');
      result.push(my_new_arr.join(''));
      
  }  
  return result.join(' ');

}
// New optimised code:
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.splice(1) + w[0] + 'ay';
  })
}
