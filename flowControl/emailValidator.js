// Simple email validation
var email = 'testtest.com';
var atPosition = email.indexOf('@');
var dorPosition = email.indexOf('.');
if (atPosition == -1 || dorPosition == -1) {
    console.log("Invalid email ID ".concat(email));
}
else {
    console.log('Valid email');
}
