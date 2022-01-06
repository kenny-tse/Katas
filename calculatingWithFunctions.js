// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(cb) { return cb ? Math.trunc(eval(0 + cb)) : 0; }
function one(cb) { return cb ? Math.trunc(eval(1 + cb)) : 1; }
function two(cb) { return cb ? Math.trunc(eval(2 + cb)) : 2; }
function three(cb) { return cb ? Math.trunc(eval(3 + cb)) : 3; }
function four(cb) { return cb ? Math.trunc(eval(4 + cb)) : 4; }
function five(cb) { return cb ? Math.trunc(eval(5 + cb)) : 5; }
function six(cb) { return cb ? Math.trunc(eval(6 + cb)) : 6; }
function seven(cb) { return cb ? Math.trunc(eval(7 + cb)) : 7; }
function eight(cb) { return cb ? Math.trunc(eval(8 + cb)) : 8; }
function nine(cb) { return cb ? Math.trunc(eval(9 + cb)) : 9; }

function plus(cb) { return "+" + cb }
function minus(cb) { return "-" + cb }
function times(cb) { return "*" + cb }
function dividedBy(cb) { return "/" + cb }

console.log(seven(times(five()))); // must return 35