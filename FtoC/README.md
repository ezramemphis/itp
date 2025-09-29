# Fahrenheit to Celsius Converter

So starting off, it's pretty simple what I have to do. First I had to establish what our "Fahrenheit" is as our first variable, which should be 99 degrees. I was able to easily do with a nice and simple declaration statement. 

`let f = 99;`

After that, now we have to declare what our "c" will be. This was a little more complicated since I had to write in the formula, but it was still fairly straight forward. With the formula, this is the command that I got. 

`let c = (f - 32) * 5 / 9;`

Finally, it's now time to log the results of the javascript command that we just made. And so I created a "console.log" that not only gave us the results, but looked nice and readible for the user so there would be no minunderstanding what the results are. And this is that last line that I got. 

`console.log(f + " Fahrenheit is equal to " + c + " Celsius");`

Now there was one aspect of this result that I didn't anticipate, which was that the decimals on the Celsius trailed on way longer that what we would normally see when discussing temperatures. My result looked like this. 

	99 Fahrenheit is equal to 37.22222222222222 Celsius

In order to make sure the results for the celsius value rounded out after only 2 decimal points, I simply replaced "c" with "c.toFixed(2)", to stop it in it's path. My console.log line now looks like this. 

`console.log(f + " Fahrenheit is equal to " + c.toFixed(2) + " Celsius");`

And the results look like this, now with a rounded celsius value that is nice and readible. 

	99 Fahrenheit is equal to 37.22 Celsius

### Prompting for "user input" value for Fahrenheit

Now there's one last thing that I wanted to figure out, which was to make a version where the user could input whatever value that they want for the Fahrenheit. So I googled really quick the simplest way that I could do this, which seems to be by making a "prompt" statement. I edited the first line of code now so that it uses a prompt to gather the value. 

`let f = prompt("Enter Fahrenheit");`

[Javascript Prompt Tutorial](https://www.w3schools.com/jsref/met_win_prompt.asp)

And the best part, this is all I had to change, the other two lines I could keep exactly the same. And there was no troubleshooting I had to do whatsoever, it just decided to work perfectly for me. And I made sure to test the code a bunch, and I haven't run into any errors. So I think we were able to lock in. So that's just about it, my beautiful and elegant code is in your hands. 

