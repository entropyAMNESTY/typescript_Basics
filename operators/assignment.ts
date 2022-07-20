var num1: number = 10;
var num2: number = 2;
// Assignment
var num3: number = num1;

console.log((num3 = num1));
// --> 10
console.log((num3 += num2));
// --> 12
console.log((num3 -= num2));
// --> 10
console.log((num3 *= num2));
// --> 20
console.log((num3 /= num2));
// --> 10
console.log((num3 %= num2));
// --> 0
