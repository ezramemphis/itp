# Title - Guitar Master

## 1 Sentence Overview

Guitar Master is an interactive software that provides generated exercises for guitarists to reflect their Juries for each performance level.


## 3 SPECIFIC resources you know you will use in developing your project

1.) [array.findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex?utm_source=chatgpt.com)

I would use this source to help generate scales, chords, or anything else from an array. So I could feed that Array whatever knowledge I need to, and it will generate the exercises. And I'm going to use this for a variety of things I'm sure. Like I want to create a music player for the title screen that just plays differnt songs from a folder of mp3s I put within the project, which I could use this for that too. I'm sure this'll come very handy.

2.) [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

I would use this source to make sure that my generators output their results completely randomly. And one thing I love about this website specifically as a resource is that it actually explains what "Math" is in general, and then has a very sleek way of explaining every single method of using it. You can scroll down and see what I mean here. [Math](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math) Anyways, being able to generate things randomly is a must for this project, so will definitely study this like crazy.

3.) []
## 1 Paragraph Overview

This will be a guitar practice web app tool that generates exercises for guitarists to continously test themselves. It will generate random scales, chords, and arpeggios that the guitarist will have to play. It will be built to emulate the questions and requirments you're asked of for each level of your Juries as a guitarist. So ideally, if you become really solid and quick with these generated exercises, the Juries will be an absolute breeze. And sometimes it's hard to get yourself to practice or know how to thoroughly push yourself and make sure you cover every base when practcing, so hopefully this takes some of that uncertainty away. 

## Will any work as part of this project overlap with any work you are doing outside of this class? 

This project will not overlap with any work I am doing outside of this class, atleast not in the general sense. As I start fleshing out this project, I will start practicing with it everyday and really study it, seeing how I can improve it and perfect it's "flow". So I will use it to prepare for my PI juries personally, but emphasize on the word "personally".

Also off topic, but I have reached out to a few guitarist already, and it looks like I'll have a nice team of beta testers as well once I get the project functioning as intended, so I'm optimistic that with enough love and attention, this could be a legitimate tool I can share with peers and legitimately enhance how we practice. 

## In the world of software, most everything takes longer to implement than you expect. And so it's not uncommon to accomplish less in a fixed amount of time than you hope.

## ⚠️ Warning! I wrote a crap ton. If you're in a rush, just read the bulletpoints, it recaps everything as a list of features.

### In a sentence (or list of features), define a GOOD outcome for your final project. I.e., what WILL you accomplish no matter what?

At the bare minimum, this website is going to have 3 functional "exercises". This will be for scales, chords, and arpeggios. Once I get that baseline functionality going, modifying them for each level shouldn't be hard at all, since it's just modifying the "databases" for each different exercise level to match what the juries ask for. For example, Level 1 scales will be regular modes, Level 2 will be melodic minor modes, and Level 3 will be harmonic minor modes, etc. There are 4 levels (atleast for non guitar performance majors, only principles), so I'll be rocking with that.

Also pretty simple, I need to make a metronome (with adjustable sounds hopefully). Just kind of a bare minimum, you need a metronome for when you practice. 

#### List of Features

- 3 Functional Exercises (Scales, Chords, Arpeggios)
- Upscaling for each level (1-4)
- Metronome with adjustable BPM

### In a sentence (or list of features), define a BETTER outcome for your final project. I.e., what do you THINK you can accomplish before the final project's deadline?

I want to implement an "auto mode" for each exercise, just for a little nicer and hands free feel. For chords it'll probably be just to second intervals, but for scales and arpeggios I'll probably implement a way to sync it to the metronome so you can play with the click each time it loops. And I'd let the user adjust things like how much prep they get, how many bars for the playing part, and if they want a little break after each loop before the next scale. So maybe like 1 bar prep -> 2 bars to play 1 octave scale up and down -> 1 bar break to get ready for next scale/arpeggio. 

I definitely want to implement a few APIs, mostly just to show off chord charts, scales, and arpeggios. So that if you want to toggle on "help" when practicing so you can see charts and shapes to help guide your practice, that will generate alongside your practice simultaneously. Not sure if I want more APIs than that, but definitely APIs to help with those things.

A practice log implementation would be really nice too, where every day you can quickly right down whatever you worked on, what you struggled with, and anything else that is worth documenting. And in that practice log for each day, I'll have a little statistics thing show for how long you practiced each exercise, how many times you "generated" each exercise, and whatever other fun statistics I can think of. And all of this will be saved to localStorage (eventually to an account, but let's be realistic), so that whenever you come back to the web app, you'll always see those notes and statistics for each day. 

#### List of Features

- Auto mode for generating exercisee
- API implementation (chord charts, scales and arpeggios on staff)
- Practice Log with Daily Statistics

### In a sentence (or list of features), define a BEST outcome for your final project. I.e., what do you HOPE to accomplish before the final project's deadline?

I really want this website to have a game-like feel to it, where it's very themeatic, has nice music playing, a series of buttons to select a mode and exercise, cool hover and click sound effects. If I'm ambitious enough, I might even add a reward system for like if you practice long enough, you get achievements, or are consistent for enough days in the row same king of thing. All in all, I want this project to be just as aesthetically promising as the actually functionality of the project. I want the users to first get pulled in by how fun it looks, but then get hooked on the fact it's actually so useful.

For even more detail, I'm thinking of a space theme. I have seen some videos on how to generate "3d scapes" that look pretty cool with particles, so I'm thinking like stars and stuff for the title screen background. And maybe some nice liminal ambient music, just calm you down and get into a practicing mood. Yea that sounds nice.

Also for the title screen, there will be a couple containers to hold buttons and other things, I want them to be transparent and have a glassy look to them. So I'll look up how to get a glassy look and figure that out for the containers. 

#### List of Features - Aesthetics

- Strong theme/Beautiful CSS
- Background music for title screen
- Sound effects
- Game-like feel
- Glassy containers
- Achievements, titles, little rewards to make you feel like a champ
- Friending (definitely will not be able to do this, but I might rig a fake preset one where I friend Taylor or something and you can see his "profile". Getting it to actually function though is a whole other battle that I am far too intimidated to trek)

#### List of Features - Last Additions

Here is just me thinking about any last function that I would want to add to this software. Unlikely I'll be able to get everything, but I'll try my best lol. 

- "Play" button, allow you to hear what the scale, chord, or arpeggio sounds like with an API that puts out piano notes. And also for scales and arpeggios, you could play along
- CHEAT SHEET Window, open it up and see all the different shapes/chord charts for chords, scales, and arpeggios. Different way to study at your own pace, focus on that darn Phrygian b9 scale, cuz it really sucks.
- There are a few more things you're tested on during the juries that I haven't mentioned yet, because certain things you're only tested on in one of the levels, versus these 3 exercises we've discussed are present in every single level. So getting into the nitty gritty to get every single exercise you could need incorporated would be great, but would take a lot of time. 
- Bonus exercises - outside of the levels and typical exercises. Guitar neck memorization exercises, automatic sheet music generator (sight reading factory dupe, but free), practice scales in context of chord progressions, ear training tools, the list goes on and on. If I have extra time, this could be cool. 
- Listen Mode - AI listens to you play your scales and arpeggios, grades on accuracy, and tells you how you can improve. (No yea this is not happening, but a boy can dream)

## Outline of steps WITH A SPECIFIC CALENDAR INCLUDING DATES

Just putting this as a reference for myself as I make this, the final is due December 9th, so gotta make sure to build the dev schedule around that. Today is November 2nd so I got a bit of time, and I've already made some strides on it which I'll list below...

What I already have (As of 11-2-25):
- Title screen with containers and buttons that send you to respective HTMLs for each exercise "level1_scales.html". Has two tiers, level select and exercise select.
- Started inputting "scale data" for the scale generator exercise. Have not made the exercise functional yet though.

## Development Schedule


#### November 7th (Week 1) - Foundations & Core Setup

- Complete inputting all scales, argeggios, and chord data for Level 1 exercises
- Make 

#### November 14th (Week 2) - Core Functionality (Level 1), CSS rough sketch

- Implement functional generators for the scales, arpeggios, and chord Level 1 exercises
- Add a "generate" button that allows me to generate exercise at my own will
- Make a functional metronome - w/ adjustable BPM
- Take time to sketch out on paper what the CSS design should look like for title screen and exercise pages
- Get the CSS roughly layed out

#### November 21st (Week 3) - Implementation for all Levels, Auto-Mode

- Taking the same process for Levels 2-4 for all 3 exercise types (should be easier since it'll already be functional, just need to change the databanks)
- Implement an Auto Mode for all of the exercises (second intervals and measures synced with metronome)

- Also, I will be continuing to work on the CSS progressively, just fine tuning it little by little

#### November 28th (Week 4) - APIS, Analytics, Practice Log & Beta testing commences

- I will spend most of this time getting the APIs integrated, and making sure that the chord, scale, and arpeggio generators will be able to properly coorelate with the different diagrams.
- There will be 3 APIs. API for chord diagrams, API to generated sheet music with a staff, and an API to know what day it is (for the practice log). 
- Figure out how to passively log simple analytics in the background to localStorage (time spent on each exericise, number of generated exercises, etc.)
- Nice looking Practice Log (for the design, I think it should be a notebook icon on the "home page" that when you click fills the screen with a pop up with the different practice logs. It'll be synced to whatever day it is with an API too. I will automate a LPF to engage whenever this page is open to dull the music out.)

- By this point, I predict that the home page and exercises page CSS's will be complete for the most part. I plan on having animated panels, button selects with hover animations, and a couple other nice little things. I will just be googling as many CSS tricks as I can to get this done, and will document every single source.

- Since the website should be fully functional and look great by this point, I will officially move this into a very brief Beta testing phase to make sure that it is as great as possible. I will share the project via a GitHub repository link to all of the guitarists, and give them just a general form asking questions about their experience. And also they'll of course just text me their feedback

#### December 2nd (Week 5) - Extra Features/Additions & Refinment Phase

- Since I pretty much will have completed the final project by now, I will then shift into adding the extra "bonus exercises" that I mentioned before. The guitar neck memorization exercises, automatic sheet music generator, and ear training tools would be my main focus. 
- By this point I'll probably have had some user input brought in from the Beta test, so I'll look into that, and use the information to further refine the functionality of the whole webapp.
- Just overall refining and getting into the nitty gritty. Making that CSS sparkle like a new Camaro ZL1, and making sure this thing runs as smoothly as can be. 


#### December 5th (Week 5 part 2) - Presentation & Final Final Touches

- Hopefully by this point, I've pretty much wrapped everything up, and I can just sit back and really think about how I want to pitch and present this tool. Really run through what that will look like
- The standard that I'm going to hold for myself is as if I'm in front of the Berklee guitar department, I'm trying to get funded to further expand the project, and I need to convince them why I'm worth their money and time. Just a solid business pitch, since this tool I do believe can hold a lot of potential.
- I will probably just make last little tweaks, but truly at this point there shouldn't be anything else that needs to be changed

#### December 9th (Week 6) - COMPLETE

- Web app will be completely functional with all exercises of each level properly generating their respective things
- All APIs will be functional and implemented
- CSS will look great, with game-like space theme
- You get the idea, now the project is complete, and we can take a victory lap and enjoy the finished project








