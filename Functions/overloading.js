function doubleMe(x) {
    // check if x  is not undefined
    if (x && typeof x === 'number') {
        console.log(x * 2);
    }
    else if (x && typeof x === 'string') {
        console.log(x + ' ' + x);
    }
}
doubleMe('asdkopanfionao');
doubleMe(4);
