var password = 'aest@123';
// Password should always start with a capital letter
//Check for Character Code ASCII --> Capital Letter start at 65
if (password.charCodeAt(0) >= 65 &&
    password.charCodeAt(0) <= 90) {
    console.log('Valid Password');
}
else {
    console.log('Invalid Password ' + password);
}
