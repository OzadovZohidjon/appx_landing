document.addEventListener("DOMContentLoaded", () => {
    //PROJECTS CARDS  START

    function indexFunctions() {

        const blocks = document.querySelectorAll('.block');

        blocks.forEach((block) => {
            block.addEventListener('mouseover', () => {
                gsap.set(block.querySelector('.images'), { scale: 0.93 })
                // gsap.set(block.querySelectorAll('.img'), { translate3d: 0 })
                gsap.to(block.querySelector('.text_two'), 0.08, {
                    opacity: 1,
                    ease: Power3.easeIn
                })

            })
            block.addEventListener('mouseout', () => {
                gsap.set(block.querySelector('.images'), { scale: 1 })

                gsap.to(block.querySelectorAll('.img'), .8, {
                    rotateX: "0deg",
                    rotateY: "0deg",

                })

                gsap.to(block.querySelector('.text_two'), 0.08, {
                    opacity: 0,
                    ease: Power3.easeIn
                })
            })

            block.addEventListener('mousemove', (event) => {
                let center = ((block.clientHeight + block.clientWidth) / 2) / 100;

                gsap.to(block.querySelectorAll('.img'), {
                    rotateX: ((event.clientX / 100)) - (center) + "deg",
                    rotateY: ((event.clientY / 100)) - (center) + "deg",

                })
            })
        })
    }

    indexFunctions();

    //PROJECTS CARDS  END

    // IBG START

    // function ibg() {

    //     let ibg = document.querySelectorAll(".ibg");
    //     for (var i = 0; i < ibg.length; i++) {
    //         if (ibg[i].querySelector('img')) {
    //             ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    //         }
    //     }
    // }


    // IBG END



    // CURSOR Start

    function cursor(items, cursor) {
        items.forEach(item => {
            item.addEventListener('mousemove', function (e) {
                const r = this.getBoundingClientRect()

                this.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
                this.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
            })

            item.addEventListener('mouseleave', function () {
                this.style.setProperty('--x', 0)
                this.style.setProperty('--y', 0)
            })



            item.addEventListener('mouseover', () => {
                gsap.to(cursor, 0.25, {
                    scale: 1,
                    autoAlpha: 1
                })

                gsap.to('html', {
                    cursor: 'none'
                })
            })
            item.addEventListener('mouseout', () => {
                gsap.to(cursor, 0.25, {
                    scale: 0,
                    autoAlpha: 0
                })

                gsap.to('html', {
                    cursor: 'unset'
                })
            })
        });


        document.addEventListener('mousemove', function mMove(el) {
            // console.log(window.clientHeight)
            gsap.to(cursor, 0.2, {
                x: el.clientX,
                y: el.clientY
            })

        })
    }



    // CURSOR END

    //MAIN SCROLL ANIMATION START


    // gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // let container = document.querySelector(".wrapper");

    // if (container) {

    //     let height;
    //     function setHeight() {
    //         height = container.getBoundingClientRect().height;
    //         console.log(document.documentElement.clientHeight);
    //         document.body.style.height = height + "px";
    //     }
    //     ScrollTrigger.addEventListener("refreshInit", setHeight);

    //     // smooth scrolling container
    //     gsap.to(document.body, {
    //         y: () => -(height - document.documentElement.clientHeight),
    //         ease: "power4",
    //         scrollTrigger: {
    //             trigger: container,
    //             start: "top top",
    //             end: "bottom bottom",
    //             scrub: 1,
    //             invalidateOnRefresh: true
    //         }
    //     });
    // }

    //MAIN SCROLL ANIMATION END


    Splitting();

    // BARBA js START

    function delay(n) {
        n = n || 2000;
        return new Promise((done) => {
            setTimeout(() => {
                done()
            }, n);
        })
    }

    function pageTransition() {
        var tl = gsap.timeline();
        tl.to(".loading-screen", {
            duration: 0.5,
            height: '100%',
            bottom: '0%',
            ease: "Expo.easeInout"
        });

        tl.to(".loading-screen .char", {
            duration: 0.5,
            ease: "Power3.easeIn",
            stagger: 0.1,
            opacity: 1
        }, 0.014)

        tl.to(".loading-screen .char", {
            duration: 0.5,
            ease: "Power2.easeInout",
            stagger: 0.1,
            opacity: 0
        }, "-=1")

        tl.to(".loading-screen", {
            duration: 1,
            height: '100%',
            bottom: '100%',
            ease: "Expo.easeInout",
            delay: 1
        }, "-=1");

        tl.set(".loading-screen", { bottom: "-100%" });

    }

    function contentAnimation() {
        var tl = gsap.timeline();

        tl.from(".menu__logo", {
            duration: 0.6,
            y: -30,
            opacity: 0,
            delay: 0.2,
            ease: "Expo.easeInout"
        })

        tl.from(".menu__nav .nav__item", {
            duration: 0.6,
            y: -30,
            opacity: 0,
            stagger: 0.2,
            delay: 0.2,
            ease: "Expo.easeInout"
        })

        tl.from(".content__title h1", {
            duration: 0.6,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            delay: 0.2,
            ease: "Expo.easeInout"
        })

        tl.from(".content__desc span", {
            duration: 0.6,
            y: 30,
            opacity: 0,
            stagger: 0.2,
            delay: 0.2,
            ease: "Expo.easeInout"
        })

        tl.from(".content__desc line", {
            duration: 0.6,
            x: '-100%',
            opacity: 0,
            ease: "Expo.easeInout"
        }, "-=1")

        tl.from(".content__img .img_wrap", {
            duration: 0.6,
            x: '100%',
            opacity: 0,
            ease: "Expo.easeInout"
        }, "-=1")
    }


    var routes = [{
        path: '/index',
        name: 'home-section'
    }, {
        path: '/about',
        name: 'about-section'
    }];

    barba.use(barbaRouter, {
        routes
    });

    $(function () {
        barba.init({
            sync: true,
            routes: routes,
            transitions: [{
                from: {

                    // define a custom rule based on the trigger class
                    // custom: ({ trigger }) => {
                    //     return trigger.classList && trigger.classList.contains('use-custom-transition');
                    // },

                    // define rule based on multiple route names
                    route: [
                        '/',
                        'about'
                    ]
                },
                to: {
                    // define rule based on multiple namespaces
                    namespace: [
                        'home-section',
                        'about-section'
                    ]
                }
            },
            {
                async leave(data) {
                    const done = this.async();

                    pageTransition();
                    await delay(500);
                    done();
                },

                async beforeEnter(data) {
                    if (data.next.namespace === "about-section") {
                        await aboutFunctions()
                    } else if (data.next.namespace === "home-section") {
                        indexFunctions();
                    } else if (data.next.namespace === "project-section") {
                        projectFunctions();
                    }
                },

                async enter(data) {
                    contentAnimation()
                }
            }
            ]

        });
    })

    // BARBA js END

    // ABOUT PAGE START

    function aboutFunctions() {
        let swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 20,
            freeMode: true,
            grabCursor: false,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    centeredSlides: false
                },

                767: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                    centeredSlides: true
                },

                1200: {
                    slidesPerView: 3,
                    spaceBetween: 60,
                    centeredSlides: true
                }
            }

        });

        const AboutCursorItems = document.querySelectorAll('.about .slider__body');
        const AboutCursor = document.querySelector('.about .cursor');

        cursor(AboutCursorItems, AboutCursor);

    }

    aboutFunctions()

    // ABOUT PAGE END

    // PROJECTS PAGE START

    function projectFunctions() {

        const itemsArray = document.querySelectorAll('.item__img');

        itemsArray.forEach((item) => {
            gsap.to(item, {
                duration: 1,
                backgroundPosition: "50% 300%",
                ease: "Expo.easeInOut",
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5
                }
            });
        })

        const ProjectsCursor = document.querySelector('.project .cursor');
        const ProjectsCursorItems = document.querySelectorAll('.project .project__item');

        cursor(ProjectsCursorItems, ProjectsCursor)
    }

    projectFunctions();

    // var ProjectsImages = document.querySelectorAll('.projects .item__img img');
    // new simpleParallax(ProjectsImages, {
    //     delay: 1,
    //     scale: 1,
    //     transition: 'linear'
    // });
    // PROJECTS PAGE END
});


