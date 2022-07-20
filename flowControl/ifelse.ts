var x: number = 10;
var y: number = 20;
var z: number = 30;

if (x > y && x > z) {
    console.log('X is greatest');
} else if (y > x && y > z) {
    console.log('Y is greatest');
} else if (z > x && z > y) {
    console.log('Z is greatest');
} else {
    console.log('The numbers are equal');
}
