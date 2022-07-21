// Variadic functions -- any number of arguments
// rest params operator ... should always be the last parameter, and has to be of type array in addition, if you want to restrict it.
var product = function () {
    // x: number,
    // y: number,
    var nums = [];
    for (
    // x: number,
    // y: number,
    var _i = 0; 
    // x: number,
    // y: number,
    _i < arguments.length; 
    // x: number,
    // y: number,
    _i++) {
        // x: number,
        // y: number,
        nums[_i] = arguments[_i];
    }
    var result = 1;
    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
};
console.log(product(2, 2, 4, 10, 2));
