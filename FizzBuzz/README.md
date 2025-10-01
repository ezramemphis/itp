# FizzBuzz Madness

This was a pretty short and sweet project with pretty much no troubleshooting which was amazing.

First off, I knew that I had to create some sort of for loop that counts up from 1 to 100, and so I made this line of code that used the javascript increment operator (++) to keep counting up until we reach 100

`for (let i = 1; i <= 100; i++) {`

I also must admit, I had to google the name of the "++" to sound smarter, so here's my source for that.

[Increment Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)

And then after that, it was fairly simple, just setting up some if, else if, and else statements to make it fulfill the results that we wanted. My thought process with this was to start with the most "specific" thing first, which was our rule for when to log "FizzBuzz", and so using the modulus remainder (%), and the "&&" to make sure that everything is true when we operate, and so we don't run into any pickles. And then finally the best part, just putting in the console.log to make sure that we actually execute our command. So this was the code we got for that part. 

	if (i % 3 === 0 && i % 5 === 0) {
	    console.log ("FizzBuzz")


I'll spare you too many words, I literally just copy and pasted that first line for "Fizz" and "Buzz", and then modified them for their needs, made them "else if" statements since they were in the middle, and made sure that everything was formatted correctly. And then lastly, I just put in a last "else" statement that tells the javascript man "just let the rest of those numbers slide through, they're all special to me". So this was all of that code I added. 

	} else if (i % 3 === 0) {
	    console.log ("Fizz")
	  } else if (i % 5 === 0) {
	    console.log ("Buzz")
	  } else {
	    console.log (i)
	    }
	  }

And that's it, I ran the code and it seems to work great. I did mention before there was "pretty much no" troubleshooting, because mainly the only issue I faced was a little formatting issue, as in misplacing a "{}" or forgetting a quotations, just very simple human errors. But other than that, code ran smooth.