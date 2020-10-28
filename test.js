
function validParentheses(parens){
    // create arr1 & 2
    let arr1 = [], arr2 = [];
    //for loop
    for (let i=0; i<parens.length; i++) {
        // push '(' in 1and ')' in 2 
        if (parens[i] == '(') {
            arr1.push('(');
        }
        if (parens[i] == ')') {
            console.log(arr1.length);
            console.log(arr2.length);
            if (arr1.length <= arr2.length) {
                return false;
            } else {
                arr2.push(')');
            }
        }
    }
    // if length = same return true else false
    if (arr1.length == arr2.length) {
        return true;
    } else {
        return false;
    }
}


console.log(validParentheses( "()" ));//, true);
console.log(validParentheses( "())" ));//, false);