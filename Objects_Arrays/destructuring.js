//Destructuring
var courses = ['Angular', 'React', 'ES6', 'JMS'];
courses.push('Spring Security');
courses.push(10);
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
// Manual Process
var x = courses[0];
var y = courses[1];
// Destructuring Arrays Process
// Taking a structure and destructuring it into individual elements
var a = courses[0], b = courses[1], c = courses[2];
console.log(a);
console.log(b);
console.log(c);
// Destructuring Objects
var student = {
    firstname: 'John',
    lastname: 'Hemming',
    score: 90
};
// Destructuring the object properties
var firstname = student.firstname, lastname = student.lastname;
console.log(firstname + ' ' + lastname);
