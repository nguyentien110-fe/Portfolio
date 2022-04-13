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
    (function() {
        $('.skills-prog li').find('.skills-bar').each(function(i) {
            $(this).find('.bar').delay(i * 150).animate({
                width: $(this).parents().attr('data-percent') + '%'
            }, 1000, 'linear', function() {
                return $(this).css({
                    'transition-duration': '.5s'
                });
            });
        });

    }).call(this);