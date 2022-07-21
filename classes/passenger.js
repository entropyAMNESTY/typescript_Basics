// Classes
var Passenger = /** @class */ (function () {
    // In languages like JAVA using the classes name, in JS we have the keyword constructor
    function Passenger(firstName, lastName, frequentFlyerNo) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }
    // this refers to the current object that will be created line 32 34
    Passenger.prototype.display = function () {
        console.log(this.firstName +
            ' ' +
            this.lastName +
            ' ' +
            this.frequentFlyerNo);
    };
    return Passenger;
}());
// Constructor
var passenger = new Passenger('John', 'Smith', 123);
passenger.display();
var passenger2 = new Passenger('Bob', 'Smith', 456);
passenger2.display();
for (var item in passenger) {
    if (passenger[item] instanceof Function) {
        continue;
    }
    else {
        console.log(item);
        console.log(passenger[item]);
    }
}
