//
// CHARACTERS
//

// One digit number from 0 to 9
var re = /\d/

// ASCII letter, digit or underscore
var re = /\w/

// Space, tab, newline or vertical tab
var re = /\s/

//
// QUANTIFIERS
//

// One or more times
var re = /a+/

// Exactly n times
var re = /a{n}/

// n to m times
var re = /a{n,m}/

// n or more times
var re = /a{n,}/

// Zero or more times
var re = /a*/

//
// ANCHORS
//

// Starting of the string
var re = /^a/

// Ending of the string
var re = /a$/