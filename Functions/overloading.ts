// Overloading
// Restricting any to numbers and strings
function doubleMe(x: number);
function doubleMe(x: string);

function doubleMe(x: any) {
    // check if x  is not undefined
    if (x && typeof x === 'number') {
        console.log(x * 2);
    } else if (x && typeof x === 'string') {
        console.log(x + ' ' + x);
    }
}

doubleMe('asdkopanfionao');
doubleMe(4);
