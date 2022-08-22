// append static keyword to become class level functions
class Calculator {
    static sum(num1: number, num2: number): number {
        return num1 + num2;
    }
    static sub(num1: number, num2: number): number {
        return num1 - num2;
    }
}

//You can use them using the class name, no object needs to be created
console.log(Calculator.sum(10, 20));
console.log(Calculator.sub(30, 20));
