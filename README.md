# MPC 2000 Sampler

This is one of the projects that I had in mind to eventually attempt to create ever since I began learning javascript. In it's essence it is a simple soundboard overlayed on top of a image of the popular AKAI MPC 2000 sampler used by music producers all around the world.

## Link

https://fabulous-snickerdoodle-1498ed.netlify.app/

## Usage

The user can press or click any of the "pads" on the MPC sampler and they will trigger an audio sample to play.

I reduced the volume of each individual audio sample before adding them to the project so they shouldn't play too loud but in any case please check the volume of the device before pressing any pads.

## Project lookback and future considerations 

For now, I feel like the project is mostly hardcoded and I am convinced that I will come back to refactor the code in a more elegant way. 

Currently each audio sample is manually assigned to each individiual pad and triggered using multiple if statements in order to identify which one is pressed.  I had initially tried to use array methods in order to assign each sound to each individiual pad but the samples would not play properly so I decided to manualy hard code them in order to at least see how a working project would look like and in the end I feel like it turned out pretty good.

Another challenge was figuring out how to exactly make the pads of the PNG image clickable but after a bit of research I discovered that I can use an "HTML Image Map".

I initially started do designate an image map square for each MPC pad using values provided by the "getBoundingClientRect()" method on the window but I quickly realized that by doing it this way the final project would not be responsive. 

After some more research, I managed to find a solution on "stackoverflow.com" where a user provided a link to a website that could generate a responsive image map, so many thanks to the helpful stackoverflow community for helping out.

The audio samples used in the project are from my personal library and they have been batch converted to mp3 and reduced the volume of each by 6db.

