var studentNames = ['John', 'Bob', 'Doug'];
var studentScores = {};
studentScores['John'] = 100;
studentScores['Bob'] = 90;
//for in loop --> string indexed array  != numeric indexed arrays --> for-loop
for (var item in studentScores) {
    // Student name
    console.log(item);
    //Student Score
    console.log(studentScores[item]);
}
