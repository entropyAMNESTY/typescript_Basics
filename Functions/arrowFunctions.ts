// ArrowFunction
var hullu = (): string => {
    return 'Hello';
};

console.log(hullu());

// pass parameters to a function

var soil = (name: string): string => {
    return 'Hello ' + name;
};

console.log(soil('chico'));

//lambda expression

var prod = (num1: number, num2: number): number => {
    return num1 * num2;
};

console.log(prod(12, 12));

// Array of Arrow Functions

var myarray: Array<any> = [];

for (var i = 0; i < 10; i++) {
    myarray.push((): number => {
        return i;
    });
}
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}
