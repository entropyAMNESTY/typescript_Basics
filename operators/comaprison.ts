// Comparisons transform to booleans in the end of the operations

/*-------------------------
===
!==
<ANGLE_instanced_arrays
>
<=
>=
-------------------------*/

var x: number = 30;
console.log(x === 30);
// --> true

var x: number = 420;
var y: number = 20;
console.log(x === 30);
// --> false

console.log(x !== 30);
// --> true

console.log(x > y);
// --> true

console.log(x < y);
// --> false

console.log(x >= y);
// --> true

console.log(x <= y);
// --> false
