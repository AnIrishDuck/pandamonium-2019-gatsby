# Static Site Generation with Gatsby

<!--
gatsby:
what is it?
where is it used?
why should you want to use it?
how does it work?
-->

---

## Who is Gatsby?

---

An enigmatic millionaire that laundered money for prohibition gangsters...

<!--
The Great Gatsby is actually one of my favorite books.
Time is a central theme of the book; I'm going to try to save you some
time today.
Gatsby is going to help.
-->

---

# What is Gatsby?
## A Static Site Generation Framework

---

> Can't repeat the past? ...Why of course you can!
> <cite>F. Scott Fitzgerald</cite>

<!--
contrast gatsby with jekyll:

- unified language on frontend and backend
- tooling web developers are already familiar with
-->

---

## A Static Site Generation Framework

* React
* Webpack
* GraphQL

<!--
These probably look really familiar.
If you're a web developer, you've probably worked with most if not all of
these technologies before
-->

---
## Where is it Used?

https://www.gatsbyjs.org/

<!--
We'll talk about the plugin ecosystem more in a bit.
-->

---

## Where is it Used?

http://inst-eng-blog.s3-website-us-west-2.amazonaws.com/

<!--
I did a proof-of-concept refresh of our eng blog last hack week.

I honestly spent more time with non-technical issues then putting this together.
Gatsby made it super fast.

If you want to talk more about that ....
-->

---
## ... Slide Decks

<!--
I'm a bit of a masochist. Downloading iMovie was too much of a pain for me,
so I piece together my hack week videos using artisan-ally crafted commands
-->

---
## I Wish I Was Joking

```
ffmpeg -avoid_negative_ts make_zero -ss 00:00:01.5 -i end.mp4 -to 00:00:11 -copyinkf -c copy end2.mp4
ffmpeg -i start.mp4 -i audio.wav -c:v copy -map 0:v:0 -map 1:a:0 combined.mp4
ffmpeg -avoid_negative_ts make_zero -ss 00:00:01 -i combined.mp4 -to 00:00:40 -async 1 -strict -2 real-start.mp4
ffmpeg -loop 1 -i slide.png -c:v libx264 -t 7 -pix_fmt yuv420p -vf scale=960:720 slide.mp4
ffmpeg -i slide.mp4 -i description.wav -c:v copy -map 0:v:0 -map 1:a:0 slide-audio.mp4
ffmpeg -i slide.mp4 -i description.wav -c:v copy -map 0:v:0 -map 1:a:0 slide-audio.mp4
ffmpeg -f concat -i catlist.txt final.mp4
```

<!--
I also, for a very long time, have built my presentations using html.
-->

---
## Gatsby Decks are Saner, I Promise!

<!--
I know it sounds crazy, and when I was editing raw HTML it really was.
But Gatsby has been a lifesaver for this stuff, even though it's bleeding edge
and has cut me from time to time.
-->

---
## Embeds
`iframe:https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11812.492973261602!2d-83.7730228!3d42.2545406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1552683864784`

<!--
It lets you do cool stuff like embed google maps...
-->

---
## Code
`iframe:https://codepen.io/anirishduck/embed/vPRwjP/?height=265&theme-id=0&default-tab=js,result`

<!--
And even code samples. You could even use codepen's live editing feature here
for UI demos. I can't because I'm too cheap to pay for their premium service,
but the sky's the limit here.

You can even do patently ridiculous things...

-->

---
## Inception
`iframe:http://localhost:8000/1`

<!--
Like embed your own slide deck inside your own slides. I was torn between a yo
dawg and Inception reference here, but let's be honest, Inception is one of my
favorite movies so it was the natural choice.
-->
