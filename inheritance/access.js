//Everything by default is public || TS2.0
var Student = /** @class */ (function () {
    function Student() {
        this.name = 'John';
    }
    return Student;
}());
var student = new Student();
// student.name = 'John'; --> error, cannot be changed
//Encapsulation --> protecting the properties / functionality from an object from other objects
// --> usually a class --> writing the data and code into one single unit
// private
// should only be accessed via the accessor methods within the class
var Tutor = /** @class */ (function () {
    function Tutor() {
    }
    Tutor.prototype.display = function () {
        console.log(this._name);
    };
    Object.defineProperty(Tutor.prototype, "name", {
        // accessor method --> keyword get
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Tutor;
}());
var tutor = new Tutor();
//set
tutor.name = 'Georg';
//get
console.log(tutor.name);
