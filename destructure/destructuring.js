const movie = {
    title: 'The Invisible Guest',
    ctg: 'Mystery',
    year: '2016'
};



// Initialize local variables
let title = '';
let ctg = '';
let year = '';
// Reassign ctg and lastname using destructuring
// Enclose in a pair of parentheses, since this is an assignment expression
({ ctg, year } = movie);

// country remains unchanged (Canada)
console.log(title, ctg, year); // The Invisible Guest Mystery 2016
//node destructuring