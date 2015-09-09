/* Quiz Instructions:
// - In HTML, have a single text input field
// - In HTML, have a button
// - In JavaScript, have a function divides a number by 10
// - In JavaScript, have a function that multiplies a number by 5
// - When the button is clicked, call a JavaScript function that checks if the user has entered
//  in a value in the input field
// - If there is no value, put an appropriate message in an alert box telling the user to enter 
// something
// - If there is a value, and its numeric value is greater than 10000, call a function that 
// passes in the user-entered value as an argument, and the name of the function that divides 
// by 10.
// -If there is a value, and its numeric value is less than 10000, call a function that passes
//  in the user-entered value as an argument, and the name of the function that multiplies by 5. 
//  Write the result of the calculation into the HTML document.
*/

function divi(diviarg) {
	return diviarg / 10;
}

function multi(multiarg) {
	return multiarg * 5;
}

function whenClicked() {
	var userValue = document.getElementById("num1").value;
	if (userValue === "") {
		alert("Gimme a number, I said!")
	} else {
		if (userValue > 10000) {
			document.getElementById("result").innerHTML = divi(userValue);
		} else {
			document.getElementById("result").innerHTML =  multi(userValue);
		}
	}
}