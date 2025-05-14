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
  2) It should be fairly permanent, meaning I don't have to worry about it breaking in the future due to updates or free trials or funds expiring.
  3) It should be easy to use both from the user perspective and the developer perspective (UX and DX respectively)
  4) Editing key parts of the website should be as simple as possible


So with those requirements in mind, here's what that turned into:
  1) I used a framework I'm familiar with (Vue.js), along with an existing component library to make the website look presentable without much effort
  2) The website is hosted on GitHub Pages, which is free, simple and tied to our repository. So long as GitHub Pages is around, our website will be too.
  3) I used Nuxt to manage most of the backend setup required for compiling Vue.js websites, along with it's provided niceties for managing fonts, icons, and this blog. All the content exists on the single page to make it easy to navigate and edit.
  4) Each visualization is automatically generated and styled through the contents of a single array.

Nuxt 
This website is built using the following Javascript technologies:
  - [Vue.js](https://vuejs.org/)
  - [Typescript](https://www.typescriptlang.org/)
  - [Nuxt](https://nuxtjs.org/)

We've talked about Vue and TS already, Nuxt is a framework built on top of Vue that adds some additional features. Basically, it simplifies the process of going from plain Vue, to everything needed to make the website work.