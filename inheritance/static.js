var Check = /** @class */ (function () {
    function Check() {
    }
    // inside the class methods, you can always access the static properties, but outside you have to use the class name
    Check.prototype.display = function () {
        Check.bankName = 'BoA';
        console.log(Check.bankName);
    };
    Check.bankName = 'Bank of America';
    return Check;
}());
//Access using the classname for static properties -- all objects will share the same static property
var check = new Check();
Check.bankName = 'BoA';
check.display();
var check2 = new Check();
check.accNo;
console.log(Check.bankName);
