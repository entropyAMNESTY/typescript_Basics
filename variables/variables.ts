// Numbers
var n1: number = 10;
console.log(n1);

// Strings
var s1: string = 'You are the creator of your destiny';
var s2: string = `All the power is within you, you can do anything and everything`;
console.log(s1);
console.log(s2);

//Boolean
var b1: boolean = true;
var b2: boolean = false;
console.log(b1);
console.log(b2);

//Any

var a1: any = 'test';
var a2: any = 123;
var a3: any = {
    productId: 1,
    product: 'bread',
    productStock: true,
};

console.log(a1);
console.log(a2);
console.log(a3);

// Array --> homogenous

var array1: Array<string> = [
    'AngularJS',
    'ReactJS',
    'VueJS',
];

console.log(array1);

// Pick the first element within the array
console.log(array1[0]);

//Length of the Array
console.log(array1.length);

// Array --> heterogenous

var array2: Array<any> = [123, 'ReactJS', true];
console.log(array2);
