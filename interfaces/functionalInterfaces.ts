// Interface for a function

interface Add {
    // return type void, or any other, --void can be overwritten -- are optional when you define an interface
    (x: number, y: number): void;
}

interface Sub {
    (x: number, y: number): number;
}

// link to interface
var add: Add;
var sub: Sub;

// Providing implementation for the function signature
add = function (x: number, y: number): number {
    return x + y;
};

sub = function (a: number, b: number): number {
    return a - b;
};

//return types
