// const Cannot be changed in the application

const pi = 3.14;
// Typescript would still compile
// pi = 4.5;

// const Functions

const product = function (x: number, y: number): number {
    return x * y;
};

//using const against function declarations
// product = function (x: number, y: number): number {
//     return x + y;
// };

console.log(product);

// ! use declare for ambient variables, who usually will be imported from outside libraries
