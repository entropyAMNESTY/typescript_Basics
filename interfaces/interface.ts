// Used for objects to have a standard set of rules that an object, array or classes should follow
// Simple: An interface acts like a contract

interface IProduct {
    id: number;
    name: string;
    description: string;
    //optional properties
    price?: number;
    // define methods on interfaces
    display(): void;
}

// Creating an Object
// typical JS Syntax
// type changes result in errors

var product1: IProduct = {
    id: 123,
    name: 'IPhone',
    description: 'Awesome phone',
    price: 1000,
    display(): void {
        console.log(this.id + ' ' + this.name);
    },
};

var product2: IProduct = {
    id: 123,
    name: 'IPhone',
    description: 'Awesome phone',
    display(): void {
        console.log(this.id + ' ' + this.name);
    },
};
