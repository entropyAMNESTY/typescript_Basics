var levels: number[] = [20, 30, 12, 30, 100, 20];
// Will create a string for the array DataTransferItemList, separated by a comma
console.log(levels.toString());
// creates a custom separator for the string items, extracted from the initial array
console.log(levels.join(' '));
// slice, if you don't define an end, it will go through all the other parts until the end automatically
console.log(levels.slice(3, 5));
// --> 30, 100

//splice -- delete and add elements at the same time
//start from index 2
//delete the next 3
// add 88, 99
//finish with the last original item
levels.splice(2, 3, 88, 99);
console.log(levels.toString());
//--> 20,30,88,99,20

// Push -- add elements
levels.push(10, 20, 30);
console.log(levels.toString());

//Pop -- remove the last items
levels.pop();
console.log(levels.toString());
