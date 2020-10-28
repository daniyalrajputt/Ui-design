var navigation = new TimelineLite({ paused: true, reversed: true });
navigation.to("#navigationWrap", 0.5, { opacity: 0.9, display: 'flex', left: 0 })
    .to(".navbar", 0.3, { opacity: 0 }, "-=0.1")
    .to(".close", 0.3, { display: "block", opacity: 1 }, "-=0.1")
    .from(".menu", 0.5, { opacity: 0, y: 30 })
    .from(".social", 0.5, { opacity: 0 });

$(".navbar, .close").click(function () {
    navigation.reversed() ? navigation.play() : navigation.reverse();
})

// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.defaults({
//     toggleActions: "restart pause resume pause"
// });

// gsap.to(".orange p", {
//     scrollTrigger: ".orange",
//     duration: 2,
//     rotation: 360
// });

// gsap.to("#section-1", {
//     scrollTrigger: {
//         trigger: "#section-1",
//         toggleActions: "restart pause reverse pause"
//     },
//     duration: 1,
//     backgroundColor: "#FFA500",
//     ease: "none"
// });

// gsap.to(".yoyo p", {
//     scrollTrigger: ".yoyo",
//     scale: 2,
//     repeat: -1,
//     yoyo: true,
//     ease: "power2"
// });

// gsap.to(".heading", {
//     scrollTrigger: ".heading", // start the animation when ".box" enters the viewport (once)
//     x: 500
// });


var scene = document.getElementById('section-1');
var parallax = new Parallax(scene);

TweenMax.from(".heading", 1, {
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom(".menu-links ul li", 1, {
    opacity: 0,
    x: -20,
    ease: Power3.easeInOut
}, 0.08)

TweenMax.from(".search", 1, {
    delay: .5,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".account", 1, {
    delay: .6,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".cart", 1, {
    delay: .7,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.from(".juice", 1, {
    delay: 2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(1)", 2, {
    delay: 2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(2)", 2, {
    delay: 2.1,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(3)", 2, {
    delay: 2.2,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(4)", 2, {
    delay: 2.3,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".leaves .layer:nth-child(5)", 2, {
    delay: 2.5,
    opacity: 0,
    y: -800,
    ease: Expo.easeInOut
})

TweenMax.from(".title", 1, {
    delay: 1,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".tagline", 1, {
    delay: 1.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".pages", 1, {
    delay: 1.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".more", 1, {
    delay: 1.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".desc", 1, {
    delay: 1.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from(".arrows", 1, {
    delay: 2,
    opacity: 0,
    ease: Expo.easeInOut
})
