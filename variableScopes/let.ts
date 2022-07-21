// let is block scoped, cannot be used outside the function block
// var in contrast can be used

for (let i = 0; i < 10; i++) {
    console.log(i);
}
// console.log(i); --> error
