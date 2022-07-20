// Switch Statement -- only one case will be executed  -- break is mandatory

var x: number = 3;

switch (x) {
    case 1:
        console.log('Case 1');
        break;
    case 2:
        console.log('Case 2');
        break;
    default:
        console.log('Default');
}

// --> Don't have a matching casee so it executes the default case
