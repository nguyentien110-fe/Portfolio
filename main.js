// Sticky header
window.addEventListener('scroll', () => {
    var header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

let viewPort = (element) => {
    let rect = element.getBoundingClientRect()
    let viewHeight = window.innerHeight

    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
        (rect.top >= 0 && rect.bottom <= viewHeight)
    )
}

let showOnScroll = document.querySelectorAll('.show-on-scroll')

function loop() {
    showOnScroll.forEach((item) => {
        if (viewPort(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })
}

window.onscroll = loop

loop()