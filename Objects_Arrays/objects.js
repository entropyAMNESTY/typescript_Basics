var student = {
    firstname: 'John',
    score: 90
};
console.log(student.firstname);
console.log(student.score);
// Loop through various properties of an object
for (var item in student) {
    console.log(item);
    console.log(student[item]);
}
