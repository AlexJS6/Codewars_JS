function spinWords(str){
    my_arr = str.split(' ');
    for (let i=0; i<my_arr.length; i++) {
        if (my_arr[i].length >= 5) {
            let new_arr = [];
            for (let j=0; j<my_arr[i].length; j++) {
                new_arr.unshift(my_arr[i][j]);
            }
            my_arr.splice(i, 1, new_arr.join(''));
        }
    }
    return my_arr.join(' ');
    //split
    //If length > 5 
    // new_arr.unshift
    //splice (i, 1, new_arr)
    //return arr
}


console.log(spinWords("Welcome"));
console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
console.log(spinWords("You are almost to the last test")); //, "You are tsomla to the last test"
console.log(spinWords("Just kidding there is still one more")); // , "Just gniddik ereht is llits one more"
console.log(spinWords("Seriously this is the last one")); // , "ylsuoireS this is the last one"