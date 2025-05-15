---
title: Javascript
sequence: 3
description: On the history of Javascript, the surrounding ecosystem, and practical applications to this project
languages:
  - javascript
  - typescript
---

# Background

You probably have a fairly solid understanding of how websites generally work. You go to a website and it sends back HTML and that's what you see. But, if you ever do any work in web dev, you'll quickly realize that there's only so much you can do (easily) with plain HTML and CSS. 

In my own words, HTML was really just meant to be "the word document" of the internet. 

## Introducing Javascript

Javascript is a "lightweight" language that was originally created to add interactivity to websites. Although it shares it's name with Java, comparing the two is like comparing cars to carpets. Yes, the syntax is *sort of* similar, but that's about it.

After the browser receives HTML, javascript contained within `<script>` tags is executed. It can manipulate the DOM (the HTML structure of the page) and extend functionality with event listeners (such as mouse or keyboard clicks), animations and more. It's important to remember here that Javascript was designed to **extend** HTML, not replace. But who cares about intent?

Internet purists will tell you that Javascript is a plague that has no place in modern web development, but most others will look at those people and go "why are you stuck in 1997?" Of course, Javascript does deserve to be criticized (as all popular languages do), but it denying its usefulness is a tinfoil hat argument.

You might have heard of a library called jQuery. This was created during a time when Javascript was still a bit of a mess and didn't have internal support for many of the things that became common practice. Nowadays, jQuery is (probably) unnecessary and there are better alternatives, but these libraries are much of the reason why Javascript managed to turn itself into a fairly decent language in time. Now, Javascript is widely adopted, growing beyond this tiny in-browser niche. Projects like [Node.js](https://nodejs.org/en) allow you to use Javascript as a backend (server) language and [npm](https://www.npmjs.com/) — Javascript's equivalent of pip — allows you to install third-party libraries and packages to extend functionality. This entire website is powered using Javascript (and it's surrounding ecosystem of libraries and tools).

## Quirks
Like all languages, Javascript has some very weird quirks. It's just the nature of a long-lived language that "tried to do it all", and got a lot of things wrong in the process which can now never be fixed. Probably the biggest quirk (that you'll actually run into) is the fact that Javascript is **loosely typed**. As opposed to a language like C (or even Python), this allows you to do some crazy things involving **type coercion**. For example, `1 + "2"`{lang="javascript"} (the number 1 and the string "2") will return the string "12". Conversely, `1 - "2"`{lang="javascript"} will return the number -1 and even more confusingly, `+12`{lang="javascript"} equals the number 12. 

I'm not going to get into why these examples are so (it's something you just need to learn/learn to avoid), but you need to know that there are very little safeguards in place to prevent these kind of things from happening. 

The last thing I want to mention here is equality. Javascript has a fairly unique concept of the **triple equal sign (===)**. This is because originally the language only had the normal (`==`) equality operator, which would return true if it was possible to coerce the two values into something equal. As a result, `1 == "1"`{lang="javascript"} would return true. Naturally, this was problematic in certain circumstances, so the triple equal sign was later added which only returns true if the values are equal in both type and value. So `1 === "1"`{lang="javascript"} would return false.

## Typescript
At this point, you might be thinking that Javascript seems kind of crazy and unsafe. And honestly, yeah, it is. So a while back, Microsoft created a [Typescript](https://www.typescriptlang.org/). Typescript is an extension of Javascript that allows you to define and enforce static typing and detect error at compile time. With it, bugs stemming from type coercion are much less likely to occur, because Typescript requires you to be very explicit about what types you are using.

However, Typescript is not a replacement for Javascript. In fact, Typescript code isn't even runnable. Instead a **transpiler** is used to convert Typescript code into plain Javascript code. Although that means that type safety isn't guaranteed at runtime, so long as you acknowledge and fix errors before compiling, it tends be fairly safe, and much safer than plain JS. **Typescript made it possible to write safe Javascript code that scales incredibly well at the industry level.**

If you've never touched JS before, don't jump right into Typescript. I make it sound like it's easy to just go from TS to JS, but it's not. Start in regular JS, just using `<script>` tags in HTML or with Node.js. Once you get the general idea, you can move on. 

The rest of this article is going to skip over a lot of details and nuances on what we take for granted in modern JS. If you are interested, these are additional some topics you can look into:
  - TSC (Typescript Compiler)
  - Bundlers (Webpack, etc.) and Transpilers (Babel)
  - ES6 (ECMAScript) vs CommonJS
  - CDN vs local libraries

These are things I have a subconscious understanding of because I have been working with JS for years. When in doubt, start small and research things as you come across them.


# The (Modern) Javascript Ecosystem

At this point, we have Javascript, and we have Typescript. So what can we do with them? The answer is: a lot. The Javascript ecosystem is massive both on frontend and backend projects and there are libraries that can do just about anything you need. But let's jump back into web development for a second, and the problems of HTML.


## The Problem with HTML
The reality is, HTML is hard. It's cumbersome, it requires artistic talent (which I don't have), and attempting to manage large sites with it is a nightmare as there is no real way to containerize parts of the website. Programming languages, however, are designed to be containerized through functions and files and whatnot. So what if we combined the niceties of a programming language with the power of HTML? That's where The reality is, HTML is hard. It's cumbersome, it requires artistic talent (which I don't have), and attempting to manage large sites with it is a nightmare. So what if we combined the niceties of a programming language with the power of HTML? That's where **frameworks** come in. come in.

## Reactive Frameworks
Reactive frameworks are Javascript libraries that allow you to build websites entirely in Javascript. They let you create reusable components that can be imported in multiple places on your site, or you can use pre-made components from open-source libraries on npm. They also simplify the process of changing state and visibility on a site. Of course, these benefits come with the con of decreased website performance, so it's on you to decide if the hours (or even months) saved using a reactive framework are worth it in your particular use case.

Reasons to not use reactive frameworks:
  - Your company banned the use of Javascript
  - Something will explode if your website doesn't load in 0.001 seconds
  - You like contributing to the tin foil hat industry
  - You have a genuinely good reason to not use it (e.g. learning purposes, extremely simple websites, memory constraints, etc.)

The most popular reactive framework is [React](https://react.dev/). You should definitely learn it if you want to work in any web dev position because it's used everywhere. I'm not a particularly big fan of React, though. The designing principle was that "it's just Javascript", but honestly that's more a curse than a blessing in my opinion, and it comes with a much higher learning curve. 

I often recommend [Vue.js](https://vuejs.org/). It's what I use for all my projects (including this website) and I find it a lot more intuitive than React. It's also much more HTML-adjacent than other options.

Because React is, well React. It can't natively display in your web browser. Instead, a transpiler is used to convert React code into HTML, CSS and (a lot of) Javascript. It also uses a **Bundler** to combine all your files into a single file which is important for performance and storage size. Honestly, this is still magic to me, so maybe just take this for granted. Research when necessary.

## Backend Frameworks
If you're using Javascript on the backend (no UI), you'll probably end up making an Web API at some point. Express.js is very popular (and well-established) for this purpose. You'll end up using a lot of npm packages for backend work. For example, I learned a lot about JS through developing a Discord bot using [Discord.js](https://discord.js.org/). 

By the way, you don't need to use Typescript for any of this, focus on getting it working before getting it right!

## Fullstack Frameworks
A fairly new trend in web development is the rise of so-called **fullstack frameworks**. These are frameworks (in Javascript) that provide both a frontend and backend solution. This means UI and API in the same place. This website uses a fullstack framework called [Nuxt](https://nuxtjs.org/) which is built on top of Vue.js. Again, research when necessary, take it for granted now.


# Conclusion
Describing Javascript is really, really hard. So, if you're interested in making a project with it, here's some recommendations:

1) If you're making a website using JS, **don't use a reactive framework** for your first project. In fact, **don't use any libraries at all**. Make something simple and get an understanding of what Javascript can do.

2) If you're making something on the backend, start with this template.
    - Create a file called `main.js`
    - Put Javascript code in there
    - Use `node main.js`{lang="shell"} to run it

3) Once you have the basics, move to Typescript and npm modules.

4) Make a project that solves a problem you have. Solving an existing problem is best, but you can make up a problem if you need to. Just make sure that the end product is something you can and would use.
    - Discord bot
    - Web API to get pictures of cats
    - Personal website
    - Website that uses your cat API to display pictures of cats
5) Research when necessary, but focus on practical knowledge. Theory is very complex and textbook-esque readings are never going to be as useful as trying things and learning from mistakes.