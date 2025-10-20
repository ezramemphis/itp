# My Midterm Project

### Phase 1 - The Sketch

This part just took like a couple minutes to make. I gave myself about 5-6 options for objects that I could try to create. The reason why I chose this object specifically is that it was going to force me to figure out many little things. 

Since the head is a cube, I'd have to figure out how to create that sense of "depth" for the cube. Which I'll explain in Phase 2 how I did this. And then just the selection of different shapes that I'd have to use for the whole object would give me some nice variety. 

### Phase 2 - Translating to P5.js

So this is where it got pretty tricky, because I was still trying to figure out P5 when I first started this project. So I started by just making a list of every single object that I'd need to make this object. The list goes as below:

- 1 square (front face)
- 2 quadrelaterals (hair and side face)
- 2 arcs that would form semi-circles (eyes)
- 2 circles (pupils)
- 1 triangle (nose)
- 1 line (mouth)

So now that I have a sort of gameplan for what objects I needed, I just started by throwing them in. Not worried about proportions, positions, or colors quite yet. Just making sure I can see all of them on the canvas so that I can arrange them how I'd like

The trickest part of this process was figuring out how to do the hair and side face, and make them not only always be connected to the front face as one big object, but actually look like a cube. In order to be able and do this, I had to be really strict with how I decided the points for the quadrelaterals. 

I started by writing in my notes what the pixels for all 4 points of the square would come out to be. It wasn't really staring at me in the face because I decided to simplify the "square" function in my code, so I had to right it in my notes. And then I knew one thing that had to stay true, a needed to always have 2 points that were shared with the original square. For the hair, it was the top 2 points on the square that had to also be the bottom 2 points of the hair. And for the side face, the right-most 2 points on the square now had to be the left most points on that quadrelateral. And then from there, I decided to create a firm "offset" to consistently create a sense of "depth" for these quadrelaterals. And I got this idea literally by just staring at a cube for a solid 30 minutes while watching youtube and having a complete eureka moment.

So for how I applied this, for the hair I used a fixed number "40" (which I tested just looked the best) to push the x values on the top points right, and bring the y values down to make it look like we're look at it from an angel. And for the side face, it was just the inverse. Bring the x values on the right-most points more to the left, and shift the y values up. And finally, we got a nice looking cube.

From there, it was very easy. Just messing with the sizes and positions of the other face features (eyes, nose, mouth), and positioning them on the front face so that they look like the original sketch. And I of course added some color to the head as well, I didn't just do all that work to not glam my boy up a little. 

Also, I was trying to figure out how to get rid of the border on all of the shapes so that it would just look sleek, and I figured out how to do it in the references page too. I pretty much learned everything I needed to know for this project from there, and just to play it safe I'll link the source. 

[noStroke Function](https://p5js.org/reference/p5/noStroke/)

### Phase 3 - Making a Function

Surprisingly enough, since I had sort of mathed out before how I did every point for the main head atleast, it was pretty easy to convert the pixels to the variables. I just put in x,y, and s for every single point as I would, and then added or took away "z" to put that depth in

Now the hardest part of this phase was actually replacing the pixels for the facial features with the variables while keeping them looking the same as before. It definitely felt a lot more restricting since I now was pretty much relying solely on percentages of the size alongside the x and y, so they all would scale and position relative to the front face (or atleast that's how I thought about it) 

For this part, to be honest all I did was just spend a ton of time messing with the percentages until it looked sort of right. And that's what I would've said if I wasn't a GENIUS, because I actually somehow found a way to math out the scaling and convert it to the variables so it lined up exactly! Below is basically the process I did for every single point so that I could get it looking exactly right consistently. For this example, I'll show how I did it with the eyes (or atleast I'll try to, it's kind of a lot to type out)

So here are the original eyes with just pixels

	// Eyes
	arc(170, 200, 25, 20, 0, PI);  // left eye
	arc(210, 200, 25, 20, 0, PI);  // right eye

And so I took every single value, and I calculated the "relative offset" based off of the pixels of the top left of the front face that we started with (140, 150). I used this specifically since it's sort of what everything was built off of, where it all once begun. And so here's the mathy stuff:

	eyeX_left  = 170 - 140 = 30 -> 30 / 100 = 0.3 
	eyeX_right = 210 - 140 = 70 -> 70 / 100 = 0.7
	eyeY       = 200 - 150 = 50 -> 50 / 100 = 0.5
	eyeW       = 25 / 100 = 0.25
	eyeH       = 20 / 100 = 0.2

So now the formula for the eyes just looks like this

	arc(x + s * 0.3, y + s * 0.5, s * 0.25, s * 0.2, 0, PI);
	arc(x + s * 0.7, y + s * 0.5, s * 0.25, s * 0.2, 0, PI);

(note it does look a little different here than in the original javascript. Here I just condensed into a couple lines of code to get the idea, but I made it look extra clean and readble in the actual script)

So from here, I just did the same thing for everything else, and it ended up working out perfect. Now it probably would've been way quicker to actually just guess the percentages and get it close enough, but where's the fun in that. Now it looks perfect, and I couldn't let my Bobby just be a "close enough"

Anyways after that whole adventure, the last issue that I had to troubleshoot was that when I called the function and scaled the size up and down, the "depth" stayed the same, so it would begin to look more like a rectangular prism the smaller that it got, which would be cool if I was making a caterpillar, but twas not the mission. In order to fix this, it was actually way simplier that I anticipated. Since I was offsetting by 40, and size was 100, the offset was always gonna be 40% of the size. So instead of just saying "z = 40", I switched the code to this so it stayed consistent.

`let z = s * 0.4;`

Now no matter how big or small it gets, we will always get that satisfying cube.

### Phase 4 - Tiling Bobby like a Pro

Man we are so close, I can taste it. Everything is already set up in place for success, all that I have to do is replace the "function draw()" with a different function I called "drawBobbyGrid()" to get this to work.

I started by using some variables that I can edit to change how many columns and rows that I get. And I literally just called them "columns" and "rows" because I've been working on this midterm for forever, and I need to make it as straight forward for myself as I can. 

Now I saw in your guidance for phase 4, you suggested taking the size of the canvas, and dividing it by how many tiles we wanted in the grid in order to find the cellW and cellH. And I mean it works, but the issue is I'd have to change that value every single time I wanted to change how many columns and rows I wanted.

And so to make it a little sleeker, I actually discovered you can grab the width and height of the canvas by just calling for "width" and "height". And so by just putting that in and dividing width by columns and height by rows, now all I have to change is the number of columns and rows I want, and it does all the work automatically. And here's where I learned about how to do that.

[Canvas Width and Height](https://p5js.org/reference/p5/width/)

I also lowkey realized after I did this that I could just literally put in the canvas size width and height manually, and divide it by columns or rows, and it does the exact same thing (like literally just 500/columns). But ay, atleast I learned something new.

Anyways, now the fun part, the nested for-loop.

Now I'm gonna be honest, I was pretty tired, and so I just went back to our ControlFlow codealong, and used the chessboard as a starter since it had the counting function up to a certain variable, which I could then subsitute mine in. I do know how to do this from scratch, but it's been a long couple weeks. So let me credit you real quick for the giggles.

[ControlFlow CodeAlong](https://github.com/rdwrome/261fa25/blob/main/04ControlFlow/codealong.js)

(Also I substituted the y and x for i and j since I already was using those variables before, and I'm not tryna accidentally screw myself up)

Anyways, instead of calling for an if statement, I instead used two "let" statements to basically have the x and y values start in there proper positions based off of what the count is for the i or j, and the cell width and height that we have set. So for x, it looks like this:

`let x = i * cellW;`

And it looks the same for y, but instead with j and cellH

I then brought back the "s" variable to make sure and scale this all properly when I did the grid. And it went relatively smooth, although I realized that my "depth" value kind of screwed it up, and so I just threw in the .72 to make it smaller, and it looks solid.

`let s = min(cellW, cellH) * 0.72;`

And lastly, time to CALL IT. But of course I had to make a last little tweak because once again the depth decided to hate me. I noticed for the top row, the hair was always being cut off since the "top" of the head was starting at the top left of the face. This was an easy fix though, all I had to do was shift the y value down by the depth. 

`Bobby(x, y + s * 0.4, s);`

And I tried to do y + z, but it didn't work and I'm just way too tired to figure out why not, so I just did it manually. But works like a charm, looking beautiful, and I'M DONE

# Post Game Thoughts

This was fun, I learned stuff, it was cool

But Bobbys face is gonna haunt me forever I think