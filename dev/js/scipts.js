const buttonSwitch = document.getElementById('switch')

buttonSwitch.addEventListener('click', (e) => {
    console.log('camd')
    e.target.classList.toggle('switch--active')
})