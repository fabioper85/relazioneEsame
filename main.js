// document.addEventListener('scroll', () => {
//     console.log(pageYOffset)
//     if (pageYOffset > 600) {
//         $('.links').fadeOut('slow');
//     }
// })

// function linksAnimate(elem) {
//     if (window.scrollY > $(elem).offset().top() - window.innerHeight / 1.2) {
//         $('#' + elem).animate({
//             opacity: 1
//         }, 1000);
//     }
// }

// function animating() {
//     linksAnimate('links');
//     linksAnimate('focus');
// }

// window.addEventListener("scroll", animating);

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    console.log(wScroll);

    if (wScroll > 250) {
        $('#toTheTop').fadeIn(700);
    } else {
        $('#toTheTop').fadeOut(700);
    }

    if (wScroll > $('#descAzienda').offset().top - window.innerHeight / 2.2) {
        $('#descAzienda').animate({
            opacity: 1,
            left: 0
        }, 700);
    }

    if (wScroll > $('#aspettative').offset().top - window.innerHeight / 2.2) {
        $('#aspettative').animate({
            opacity: 1
        }, 700);
    }

    if (wScroll > $('#focus').offset().top - window.innerHeight / 2.2) {
        $('#focus').animate({
            opacity: 1
        }, 700);
    }

    if (wScroll > $('#analisiStage').offset().top - window.innerHeight / 2) {
        $('#analisiStage').animate({
            opacity: 1
        }, 700);
    }
})

$('#toTheTop').on('click', () => {
    $('body, html').animate({
        scrollTop: 0
    }, 800, "swing")
})
