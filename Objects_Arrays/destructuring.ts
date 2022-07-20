//Destructuring

var courses: any = ['Angular', 'React', 'ES6', 'JMS'];
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
var [a, b, c] = courses;
console.log(a);
console.log(b);
console.log(c);

// Destructuring Objects
var student = {
    firstname: 'John',
    lastname: 'Hemming',
    score: 90,
};

// Destructuring the object properties
//using the exact property names
var { firstname, lastname } = student;
console.log(firstname + ' ' + lastname);
