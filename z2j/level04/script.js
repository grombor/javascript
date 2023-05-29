'use strict';

function handleScroll(event) {
    const element = document.querySelector('.carousel');
    element.scrollLeft += (event.deltaY)*0.5;
    event.preventDefault();
  }