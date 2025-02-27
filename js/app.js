gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.5,
	effects: true
})

gsap.fromTo('.hero-section', { opacity: 1 }, {
	opacity: 0,
	scrollTrigger: {
		trigger: '.hero-section',
		start: 'top',
		end: '350',
		scrub: true
	}
})

gsap.fromTo('.heart-container', { scale: 0.0 }, {
	scale: 0.5, // Увеличение сердца
    scrollTrigger: {
        trigger: ".heart-container",
		start: '-1400',
		end: '300',
        scrub: true // Связывание с прокруткой
    }
})


let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

itemsL.forEach(item => {
	gsap.fromTo(item, { opacity: 0, x: -50 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			trigger: item,
			start: '-850',
			end: '-100',
			scrub: true
		}
	})
})

let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

itemsR.forEach(item => {
	gsap.fromTo(item, { opacity: 0, x: 50 }, {
		opacity: 1, x: 0,
		scrollTrigger: {
			trigger: item,
			start: '-750',
			end: 'top',
			scrub: true
		}
	})
})
