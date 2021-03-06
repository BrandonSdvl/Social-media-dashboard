const buttonSwitch = document.getElementById('switch')
const styles = document.documentElement.style;
let theme = JSON.parse(localStorage.getItem('theme')) ? JSON.parse(localStorage.getItem('theme')) : { dark: false }

const lightTheme = {
    '--background': 'hsl(0, 0%, 100%)',
    '--card-bg-hover': 'hsl(232, 33%, 91%)',
    '--top-background': 'hsl(225, 100%, 98%)',
    '--card-background': 'hsl(227, 47%, 96%)',
    '--text': 'hsl(228, 12%, 44%)',
    '--text-second': 'hsl(230, 17%, 14%)',
    '--toggle-background': 'hsl(230, 22%, 74%)'
}

const darkTheme = {
    '--background': 'hsl(230, 17%, 14%)',
    '--card-bg-hover': 'hsl(228, 26%, 27%)',
    '--top-background': 'hsl(232, 19%, 15%)',
    '--card-background': 'hsl(228, 28%, 20%)',
    '--text': 'hsl(228, 34%, 66%)',
    '--text-second': 'hsl(0, 0%, 100%)',
    '--toggle-background': 'linear-gradient(to right, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%)100%)'
}

buttonSwitch.addEventListener('click', () => {
    theme.dark ? changeTheme(lightTheme) : changeTheme(darkTheme)
    theme.dark = !theme.dark
    localStorage.setItem('theme', JSON.stringify(theme))
})

const changeTheme = theme => {
    const customStyles = Object.keys(theme);
    buttonSwitch.classList.toggle('switch--active')
    for (const style of customStyles) {
        styles.setProperty(style, theme[style]);
    }
};

const loadTheme = () => {
    if (localStorage.getItem('theme')) {
        if (theme.dark) {
            changeTheme(darkTheme)
        }
    } else {
        localStorage.setItem('theme', JSON.stringify(theme))
    }
}

loadTheme()