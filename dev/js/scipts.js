const buttonSwitch = document.getElementById('switch')

buttonSwitch.addEventListener('click', (e) => {
    e.target.classList.toggle('switch--active')
})