// Imports to allow JS file use the css attributes
import './style.css';

// Targeting animals for picture scrolling (Fade-in)
const faders = document.querySelectorAll('.animating-container');
const appearOptions = {
	threshold: 0,
	rootMargin: '0px 0px -150px 0px',
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			return;
		} else {
			entry.target.classList.add('appear');
			appearOnScroll.unobserve(entry.target);
		}
	});
}, appearOptions);

faders.forEach((fader) => {
	appearOnScroll.observe(fader);
});

// sliders.forEach((slider) => {
// 	appearOnScroll.observe(slider);
// });
