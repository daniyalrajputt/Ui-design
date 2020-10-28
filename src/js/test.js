var navigation = new TimelineLite({ paused: true, reversed: true });
navigation.to("#navigationWrap", 0.5, { opacity: 0.9, display: 'flex', left: 0 })
    .to(".navbar", 0.3, { opacity: 0 }, "-=0.1")
    .to(".close", 0.3, { display: "block", opacity: 1 }, "-=0.1")
    .from(".nav-item-1", 0.5, { opacity: 0, x: -200 })
    .from(".nav-item-2", 0.5, { opacity: 0, x: 200, delay: .1 })
    .from(".nav-item-3", 0.5, { opacity: 0, x: -200, delay: .11 })
    .from(".nav-item-4", 0.5, { opacity: 0, x: 200, delay: .12 })
    .from(".nav-item-5", 0.5, { opacity: 0, x: -200, delay: .13 })
    .from(".nav-item-6", 0.5, { opacity: 0, x: 200, delay: .14 })
    .from(".nav-item-7", 0.5, { opacity: 0, x: -200, delay: .15 })

$(".navbar, .close").click(function () {
    navigation.reversed() ? navigation.play() : navigation.reverse();
})


function animateFrom(elem, direction) {
    direction = direction | 1;

    var x = 0,
        y = direction * 100;
    if (elem.classList.contains("left-side")) {
        x = -100;
        y = 0;
    } else if (elem.classList.contains("right-side")) {
        x = 100;
        y = 0;
    }
    gsap.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
        duration: 2.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: "expo",
        overwrite: "auto"
    });
}

function hide(elem) {
    gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".heading, .sub-heading, .paragraph, .dot-pattern-3,.dot-pattern-2, .dot-pattern-1,.parallex-img-1,.parallex-img-2").forEach(function (elem) {
        hide(elem); // assure that the element is hidden when scrolled into view

        ScrollTrigger.create({
            trigger: elem,
            onEnter: function () { animateFrom(elem) },
            onEnterBack: function () { animateFrom(elem, -2) },
            onLeave: function () { hide(elem) } // assure that the element is hidden when scrolled into view
        });
    });
});
