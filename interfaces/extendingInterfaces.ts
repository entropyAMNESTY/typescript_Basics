interface Exterior {
    color: string;
    numberDoors: number;
}

interface Interior {
    seats: number;
    auto: boolean;
}

//Extending the subobjects
interface Car extends Exterior, Interior {
    make: string;
    model: string;
    year: number;
}

var myCar: Car = {
    make: 'Ford',
    model: 'Fiesta',
    year: 1999,
    color: 'red',
    numberDoors: 3,
    seats: 4,
    auto: false,
};
