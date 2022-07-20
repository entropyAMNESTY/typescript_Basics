// Simple email validation

var email: string = 'test@test.com';
var atPosition: number = email.indexOf('@');
var dorPosition: number = email.indexOf('.');

if (atPosition == -1 || dorPosition == -1) {
    console.log(`Invalid email ID ${email}`);
} else {
    console.log('Valid email');
}

// --> valid email
