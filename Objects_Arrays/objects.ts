var student = {
    firstname: 'John',
    lastname: 'Hemming',
    score: 90,
};

console.log(student.firstname);
console.log(student.score);

// Loop through various properties of an object
for (var item in student) {
    console.log(item);
    // return the values of the properties
    console.log(student[item]);
}
