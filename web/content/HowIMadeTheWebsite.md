---
title: How I Made the Website
sequence: 4
description: A brief overview of how I made the website for our project, including the design requirements I had and the tools I used.
languages:
  - javascript
  - typescript
  - nuxt
  - vuejs
  - html
---

# Requirements
When I was designing the website, I had a few requirements in mind:
  1) It should be very simple. The bulk of our project grade isn't based on the website, so I didn't want to spend too much time on it.
  2) It should be fairly permanent. I don't have to worry about it breaking in the future due to updates or free trials or funds expiring.
  3) It should be easy to use both from the user perspective and the developer perspective (UX and DX respectively)
  4) Editing key parts of the website should be as simple as possible


So with those requirements in mind, here's what that turned into for me.

## Technologies
The core of the website is powered by Nuxt, a fullstack Javascript framework. Nuxt uses Vue.js for it's UI and frontend and Typescript/Node.js for the backend. I chose Nuxt for a few reasons:
  - I have a lots of experience with Vue and Nuxt. This is basically what I use for all my personal projects.
  - It does a lot for me. It lets me not worry about Bundling or Transpiling or any of the other annoyances of JS development and just lets me focus on content.
  - Using a Reactive Framework in the Frontend (Vue) means I can use existing component libraries to handle styling and layout. I'm not an artist, so this helps me make nice enough things quickly.

Initially, I didn't want to use Nuxt. I thought it was too overbuilt for what we needed, but after fighting with other solutions for a while, I realized that I was wasting too much time on things that don't matter and using Nuxt would mean just getting things working and moving on.

## Nuxt
At the heart of every (backend/fullstack) project is the `package.json` file. This is similar to a `requirements.txt` file you would see in Python, though it does a lot more than just handle dependency management. For nuxt, there's also the `nuxt.config.ts` file, which contains Nuxt-specific configuration. Pretty much any **"batteries-included"** framework (meaning it does a lot for you) will have some sort of configuration file.

Remember that the end goal of these frameworks is to simplify the process of building a website. At the end of the day, they take your code in whatever language it is in (Vue, React, Typescript, etc.) and turn it into a hodgepodge of HTML, CSS, and JS files which don't have a concept of a "framework". So, when you run `npm run build`{lang="shell"}, it looks for a `build` script in the `package.json` file, then hands it off to Nuxt to compile everything down into a single folder containing all those "de-nuxtified" files (`.output` in our case). We then can ship that folder off to a provider GitHub Pages and ta-da, we have a website.

### Understanding Vue & the Folder Structure
Nuxt uses a very specific folder structure to organize code. The `pages/` folder, for example, contains all the individual routes of the website (note, `index` is a web convention meaning "default". For example, https://google.com and https://google.com/index.html typically go to the same place).

Inside of `pages/index.vue` is the code for the homepage. This is a Vue component, meaning we'll be writing Vue code in here. Vue components (files) have three sections `<template>`, `<script>` and `<style>`.

### Template
The template section is where we define the visual layout of the file. Any HTML we write here will be rendered on the page.