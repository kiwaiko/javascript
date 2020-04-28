const student = {
    firstname: 'sharon',
    lastname: 'kiwaiko',
    country: ''
};
// Initialize local variables
let country = 'israel';
let firstname = '';
let lastname = '';
// Reassign firstname and lastname using destructuring
// Enclose in a pair of parentheses, since this is an assignment expression
({ firstname, lastname } = student);

// country remains unchanged (Canada)
console.log(firstname, lastname, country); // sharon kiwaiko israel
//node destructuring