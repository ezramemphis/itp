// This program converts Fahrenheit to Celsius

// This version uses a fixed value for the Fahrenheit, at 99 degrees
let f = 99;
let c = (f - 32) * 5 / 9;
console.log(f + " Fahrenheit is equal to " + c.toFixed(2) + " Celsius");

// This version allows you to input whatever value you want for the Fahrenheit, and it will log the conversion results
let f = prompt("Enter Fahrenheit");
let c = (f - 32) * 5 / 9;
console.log(f + " Fahrenheit is equal to " + c.toFixed(2) + " Celsius");

// Optional text prompts that pair with inputted temperature, just paste underneath converter

if (f <= 32) {
  console.log("❄️ Below freezing — that's ice cold! Bundle up.");
} else if (f > 32 && f <= 50) {
  console.log("🧥 Pretty chilly, better grab a jacket.");
} else if (f > 50 && f <= 70) {
  console.log("😊 Comfortable weather, not too hot or cold.");
} else if (f > 70 && f <= 85) {
  console.log("🌞 Warm day — perfect for being outside.");
} else if (f > 85 && f <= 100) {
  console.log("🥵 Hot! Stay hydrated and find some shade.");
} else {
  console.log("🔥 Bro it's hot as hell! You're cooked.");
}