interface StudentName {
    // Define the type of index you want for the array
    //Either number or string
    //define the data, the array should carry
    [index: number]: string;
}

interface StudentScore {
    [index: string]: number;
}

var studentNames: StudentName = ['John', 'Bob', 'Doug'];
var studentScores: StudentScore = {};

studentScores['John'] = 100;
studentScores['Bob'] = 90;

//for in loop --> string indexed array  != numeric indexed arrays --> for-loop
for (var item in studentScores) {
    // Student name
    console.log(item);
    //Student Score
    console.log(studentScores[item]);
}
