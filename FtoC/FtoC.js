// This program converts Fahrenheit to Celsius

// This version uses a fixed value for the Fahrenheit, at 99 degrees
let f = 99;
let c = (f - 32) * 5 / 9;
console.log(f + " Fahrenheit is equal to " + c.toFixed(2) + " Celsius");

// This version allows you to input whatever value you want for the Fahrenheit, and it will log the conversion results
let f = prompt("Enter Fahrenheit:");
let c = (f - 32) * 5 / 9;
console.log(f + " Fahrenheit is equal to " + c.toFixed(2) + " Celsius");