//Inheritance:  New Object --> extends  --> Existing Object

// Example: Iphone13 extends Iphone12 -- newer object has some updated or new properties, but extends some of the basics from the ancestor

class BMW {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    commonEngineFunc() {
        console.log('Common Func');
    }

    start() {
        console.log('Start');
    }

    stop() {
        console.log('Stop');
    }
}

//child-classes
class ThreeSeries extends BMW {
    cruiseControlEnabled: boolean;

    cruiseControl() {
        this.cruiseControlEnabled = true;
        console.log('Cruising');
    }

    // when we do inheritance in a child constructor we use super method, we also add the parent properties in the parameter
    constructor(
        make: string,
        model: string,
        year: number,
        cruiseControlEnabled: boolean
    ) {
        super(make, model, year);
        this.cruiseControlEnabled = cruiseControlEnabled;
    }

    // Overriding Parent class methods

    start() {
        console.log('Button Start');
    }

    stop() {
        console.log('Button Stop');
    }
}

class FiveSeries extends BMW {
    parkingAssistEnabled: boolean;

    parkingAssist() {
        this.parkingAssistEnabled = true;
        console.log('Parking');
    }

    constructor(
        make: string,
        model: string,
        year: number,
        parkingAssistEnabled: boolean
    ) {
        super(make, model, year);
        this.parkingAssistEnabled = parkingAssistEnabled;
    }

    // Overriding Parent class methods

    start() {
        console.log('Remote Start');
    }

    stop() {
        console.log('Remote Stop');
    }
}

var threeSeries = new ThreeSeries(
    'BMW',
    '328i',
    2010,
    false
);
console.log(threeSeries.cruiseControlEnabled);
console.log(threeSeries.make);
console.log(threeSeries.model);
console.log(threeSeries.year);

threeSeries.commonEngineFunc();
threeSeries.start();
threeSeries.stop();
threeSeries.cruiseControl();

var fiveSeries = new FiveSeries('BMW', '535', 2012, false);
console.log(fiveSeries.parkingAssistEnabled);
console.log(fiveSeries.make);
console.log(fiveSeries.model);
console.log(fiveSeries.year);

fiveSeries.commonEngineFunc();
fiveSeries.start();
fiveSeries.stop();
fiveSeries.parkingAssist();
