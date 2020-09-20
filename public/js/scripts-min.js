"use strict";

var buttonSwitch = document.getElementById('switch');
buttonSwitch.addEventListener('click', function (e) {
  console.log('camd');
  e.target.classList.toggle('switch--active');
});