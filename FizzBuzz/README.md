# FizzBuzz Madness

This was a pretty short and sweet project with pretty much no troubleshooting which was amazing.

First off, I knew that I had to create some sort of for loop that counts up from 1 to 100, and so I made this line of code that used the javascript increment operator (++) to keep counting up until we reach 100

`for (let i = 1; i <= 100; i++) {`

I also must admit, I had to google the name of the "++" to sound smarter, so here's my source for that.

[Increment Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)

And then after that, it was fairly simple, just setting up some if, else if, and else statements to make it fulfill the results that we wanted. My thought process with this was to start with the most "specific" thing first, which was our rule for when to log "FizzBuzz", and so using the modulus remainder (%), and the "&&" to make sure that everything is true when we operate, and so we don't run into any pickles. And then finally the best part, just putting in the console.log to make sure that we actually execute our command. So this was the code we got for that part. 

	if (i % 3 === 0 && i % 5 === 0) {
	    console.log ("FizzBuzz")


After that, the rest was simply building out the other conditions. I copied the structure of the first check and adjusted it — one for numbers divisible only by 3 (which logs “Fizz”), and another for numbers divisible only by 5 (which logs “Buzz”). I made sure those were else if statements so they wouldn’t conflict with the first condition. Finally, I wrapped it up with a default else statement, which just prints the number itself if none of the other conditions apply.

	} else if (i % 3 === 0) {
	    console.log ("Fizz")
	  } else if (i % 5 === 0) {
	    console.log ("Buzz")
	  } else {
	    console.log (i)
	    }
	  }

And that's it, I ran the code and it seems to work great. I did mention before there was "pretty much no" troubleshooting, because mainly the only issue I faced was a little formatting issue, as in misplacing a "{}" or forgetting a quotations, just very simple human errors. But other than that, code ran smooth.