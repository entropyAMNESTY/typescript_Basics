// Variadic functions -- any number of arguments
// rest params operator ... should always be the last parameter, and has to be of type array in addition, if you want to restrict it.

var product = function (
    // x: number,
    // y: number,
    ...nums: number[]
) {
    var result = 1;

    for (var i = 0; i < nums.length; i++) {
        console.log(nums[i]);
        result *= nums[i];
    }
    return result;
};

console.log(product(2, 2, 4, 10, 2));
