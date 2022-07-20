// Convention to use the opposite Quote type when both are necessary
var s1 = '<a href=""/>';
// Using backticks
var userName = 'Flo';
var s2 = "My name is ".concat(userName);
console.log(s2);
// Escape Sequences \n --> newLine \t --> tabSpace \v --> verticalSpace
var s3 = "My \\ name is ".concat(userName);
console.log(s3);
//String Functions
console.log(s2.length);
// --> 14
console.log(s2.charAt(0));
// --> M
console.log(s2.indexOf('n'));
// --> 3
console.log(s2.lastIndexOf('o'));
// -->
