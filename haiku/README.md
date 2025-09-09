# My Process in Aquiring the Haiku Recording

I started my process by finding a haiku on the "poetryfoundation" website. Here's the Haiku that I selected

	On the phone, my grandfather’s voice  
	so frail  
	No, my father’s

[Haiku source](https://www.poetryfoundation.org/poetrymagazine/poems/159451/haiku-63b58b4517586)

From there, I ran a cd in my terminal in order to send the aiff file I was about to generate directly into the "haiku" folder we created during class (which was just documents/GitHub/itp/haiku). From there it was pretty easy. I ran the command we discussed earlier to generate the aiff, although I had to make a small change to get it to work. 

Typically, if I were just keeping it simple, I would just type in `say "my-haiku" -o haiku.aiff`

The issue I kept having was that the generated aiff file was completely empty, but it was being generated, so it wasn't an issue with the terminal command

I was able to fix this by adding a little specifier at the beginning of the line to make sure that it selected a voice to execute this command, and sure enough that worked. All I had to do was add "-v" to let them know I'm selecting a voice, and then the name of one of the pre-installed voices. So in case for some reason another kid in the future has this same problem, I would definitely try this. And it's really fun switching through the different voices lol.

I used the website linked below in order to be able to do this.

["say command" aid](https://maithegeek.medium.com/having-fun-in-macos-with-say-command-d4a0d3319668)

So now with this new addition, the command looks like this instead `say -v Alex "my-haiku" -o haiku.aiff`

From there, all I had to do was paste the Haiku that I found before, and paste it in the area where it says "my-haiku" in the examples I provided. After that, I just had to click return, and BOOM, we got the goods.



