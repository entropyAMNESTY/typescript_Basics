//Everything by default is public || TS2.0
class Student {
    public readonly name: string = 'John';
}

var student = new Student();
// student.name = 'John'; --> error, cannot be changed

//Encapsulation --> protecting the properties / functionality from an object from other objects
// --> usually a class --> writing the data and code into one single unit
// private
// should only be accessed via the accessor methods within the class

class Tutor {
    private _name: string;

    display() {
        console.log(this._name);
    }

    // accessor method --> keyword get

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }
}

var tutor = new Tutor();
tutor.name = 'Georg';
console.log(tutor.name);
