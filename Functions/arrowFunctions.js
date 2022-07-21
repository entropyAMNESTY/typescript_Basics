// ArrowFunction
var hullu = function () {
    return 'Hello';
};
console.log(hullu());
// pass parameters to a function
var soil = function (name) {
    return 'Hello ' + name;
};
console.log(soil('chico'));
//lambda expression
var prod = function (num1, num2) {
    return num1 * num2;
};
console.log(prod(12, 12));
// Array of Arrow Functions
var myarray = [];
for (var i = 0; i < 10; i++) {
    myarray.push(function () {
        return i;
    });
}
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}
