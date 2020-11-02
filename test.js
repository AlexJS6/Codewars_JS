// LEARN METHODS: https://www.youtube.com/c/SteveGriffith-Prof3ssorSt3v3/search?query=method
// LEARN MAp     DONE
// LEARN Some     DONE
// LEARN forEach   DONE
// LEARN every   DONE
// LEARN from    DONE
// Learn reduce   DONE
// LEARN     DONE
// LEAR Includes DONE
// LEARN Create 
// LEARN sort
// change name

function orderWeight(string) {
    // Split string (' ')
    new_arr = string.split(' '), sec_arr = [];
    // get each to string 
    // split each
    new_arr.forEach(elem => {
        arr = elem.split('');
        let result = 0;
        arr.forEach(num => {
            result += parseInt(num);
        });
        sec_arr.push(result);
        console.log(sec_arr)
    });
    
    // parseInt them and sum them
    // sort them and put in order into array

}


console.log(orderWeight("103 123 4444 99 2000"))//, "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))//, "11 11 2000 10003 22 123 1234000 44444444 9999")