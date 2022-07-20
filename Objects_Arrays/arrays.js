var courses = ['Angular', 'React', 'ES6', 'JMS'];
courses.push('Spring Security');
// TS assumes that all the items have to be of type string so it alerts the push of 10 as a number value
courses.push(10);
// if you add mixed datatypes to the array in the first place you may add multiple datatypes to it
// or you can add :any to the variable array
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i]);
}
