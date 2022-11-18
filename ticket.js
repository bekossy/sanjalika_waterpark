/**
 * This is for the toggle button when Breakpoint is met
 */
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBarLinks = document.getElementsByClassName('navlist')[0]

toggleButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})
