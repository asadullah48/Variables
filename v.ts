//use const where variable values do not change such as bank A/c #, ID # etc..
const a = 5;
const b : number = 33;
const c ="best";

//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
	let z = 4;
	//use z
}
else {
	let z = "string";
	//use z
}
console.log("let: " + z);// Error: z is not defined in this scope

// learning
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("hello");
console.log(output); // Output: hello

