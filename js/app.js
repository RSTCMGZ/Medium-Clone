const nav = document.querySelector('nav')
const btn = document.querySelector('.get-started')

window.addEventListener("scroll", function navbarColor() {
    if (this.window.scrollY > 300) {
        nav.classList.add('bg-white')
        nav.classList.remove('bg-warning')
        btn.classList.add('bg-success', 'text-white')
        btn.classList.remove('btn-dark', 'text-dark')
    } else {
        nav.classList.remove('bg-white')
        nav.classList.add('bg-warning')
        btn.classList.remove('text-white', 'bg-success')
        btn.classList.add('text-white', 'btn-dark')
    }
})
navbarColor()