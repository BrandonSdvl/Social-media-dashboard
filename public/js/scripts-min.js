"use strict";

var buttonSwitch = document.getElementById('switch');
buttonSwitch.addEventListener('click', function (e) {
  e.target.classList.toggle('switch--active');
});