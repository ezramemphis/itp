# Kandy Krush - Our Band Project

[Kandy Krush Website](https://ezramemphis.github.io/Kandy-Krush/)

## Problems Faced

- Trying to get the event listener to work so that an mp3 would play whenever we clicked on the website. At first it just wasn't playing at all when we clicked, but there were no console errors so I wasn't sure what was going on. I fixed it by creating the audio once instead of how we initially had it set where a new one was created with every click, so the browser wouldn’t block it. Then I added currentTime = 0 so it restarts from the beginning on each click. So basically making sure that it restarts with every click I think forced it from tripping itself up.
- Trying to get the linear and radial gradient to work for the background. I got the radial gradient to work by setting it as the background of the .container and the body, which smoothly blends colors from the center outward.
- Importing custom fonts and applying them. After a little googling, we found a way to add in these "font-face" things that basically allowed us to create font families with the custom font, which we could then use to apply to whatever other elements we wanted. Here's our source for that. [Custom Font Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face)
- Trying to get the containers for the artist descriptions to be centered. We realized that apparently there needed to be a margin for the container in order for the browser to properly center the container in the window. 

## Self Assessment

I feel like I contributed a solid amount to the project. I sort of took the lead on really sketching out what the HTML and CSS would look like since I'm fairly familiar with how to structure all of that together. And I made sure to turn to the rest of the band whenever I made any edits or decisions to make sure that everyone liked how it was looking. And I also wrote my own artist description for myself. 

## Group Members

Cameron - He contributed towards getting all of the fonts for the website, and made big contributions to how we would color the website so that we could get the wild hyper pop effect, while still being relatively readable. He also wrote his own description for his artist bio. He also put together the "band photo" that we have at the top (and might I say he did it super quick), so that was awesome.

Mila - She contributed the music that we have at the top of the website. And she also played a big role in figuring out the colors and themeatic elements 

Yu Chun - He added in the javascript that plays an mp3 whenever we click on the website. And he also provided the gif of the cute little cat, I love it. And he also of course wrote his own description for his own bio. 