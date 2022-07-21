// Classes
class Passenger {
    firstName: string;
    lastName: string;
    frequentFlyerNo: number;

    // In languages like JAVA using the classes name, in JS we have the keyword constructor
    constructor(
        firstName: string,
        lastName: string,
        frequentFlyerNo: number
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerNo = frequentFlyerNo;
    }

    // this refers to the current object that will be created line 32 34
    display() {
        console.log(
            this.firstName +
                ' ' +
                this.lastName +
                ' ' +
                this.frequentFlyerNo
        );
    }
}

// Constructor

var passenger = new Passenger('John', 'Smith', 123);
passenger.display();
var passenger2 = new Passenger('Bob', 'Smith', 456);
passenger2.display();

// will not see the function in the output.
for (let item in passenger) {
    if (passenger[item] instanceof Function) {
        continue;
    } else {
        console.log(item);
        console.log(passenger[item]);
    }
}
