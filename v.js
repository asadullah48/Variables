//use const where variable values do not change such as bank A/c #, ID # etc..
var a = 5;
var b = 33;
var c = "best";
//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
    var z = 4;
    //use z
}
else {
    var z = "string";
    //use z
}
console.log("let: "); // Error: z is not defined in this scope
// learning
function identity(arg) {
    return arg;
}
var output = identity("hello");
console.log(output); // Output: hello
