// Used for objects to have a standard set of rules that an object, array or classes should follow
// Simple: An interface acts like a contract
// Creating an Object
// typical JS Syntax
// type changes result in errors
var product1 = {
    id: 123,
    name: 'IPhone',
    description: 'Awesome phone',
    price: 1000,
    display: function () {
        console.log(this.id + ' ' + this.name);
    }
};
var product2 = {
    id: 123,
    name: 'IPhone',
    description: 'Awesome phone',
    display: function () {
        console.log(this.id + ' ' + this.name);
    }
};
