// Hello friend
// function hello(): string {
//     return 'Hello friend';
// }
// console.log(hello());
// Passing a parameter to a function
function hello(name) {
    return 'Hello ' + name;
}
console.log(hello('Steve'));
// passing multiple parameters
function add(num1, num2) {
    return num1 + num2;
}
console.log('The result is: ' + add(10, 20));
//using optional parameters -- by using '?' after the parameter
// function display(id: number, name: string, role?: string) {
function display(id, name, role) {
    if (role === void 0) { role = 'Normal User'; }
    console.log('ID', id);
    console.log('Name', name);
    // exclude the log if it undefined
    // if (role != undefined) {
    console.log('role', role);
    // }
}
display(1, 'Flo', 'admin');
//using default values for parameters to prevent undefined returns
//Passing functions as parameters
// void returns nothing
function calculator(fun) {
    console.log(fun(10, 20));
}
calculator(add);
// Returning a Function
function calculator2() {
    function subtract(num1, num2) {
        return num1 - num2;
    }
    return subtract;
}
// var sub = calculator2();
// console.log(sub(250, 5));
//or shorter same outcome as above
console.log(calculator2()(250, 5));
// Anonymous function
var hallo = function (name) {
    return 'Hallo ' + name;
};
//you can use any name instead of hallo
console.log(hallo('Joker'));
