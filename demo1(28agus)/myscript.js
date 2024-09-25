// Declare variables
var val1 = 3;
var val2 = 8;
var myName = "Manueke Bill Elan Samuel";

// Document Object
document.getElementById("my-btn").addEventListener("click",
function() {
	myFunction(myName, val1, val2);
	{);
	
// your function, hy remember yout function
function myFunction(name, a, b) {
	var value= a*b;
	var join= name+": "+value;
	document.getElementById("value-demo") . innerHTML = join;
}