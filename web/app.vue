<template>
  <div id="header" />
  <div id="bodyContent">
    <NuxtPage/>
  </div>
</template>

<style>
:root {
  font-family: "Inter", sans-serif;
}

body {
  margin: 0 !important;
}

/* Reduce body width on large monitors */
@media (min-width: 1200px) {
  #bodyContent {
    width: 65% !important;
    margin: auto;
  }
}
</style>
