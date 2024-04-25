// Imports to allow JS file use the css attributes
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
	// function to toggle visibilty
	const toggleVisibility = (showClass, hideClass) => {
		document.querySelector(showClass).style.display = 'block';
		document.querySelector(hideClass).style.display = 'none';
	};

	// function targeting when button is active to add css properties
	const toggleActiveClass = (activeButton) => {
		// Remove the active class from all buttons
		document.querySelectorAll('.page-nav button').forEach((button) => {
			button.classList.remove('.prev-active');
		});

		// Add the active class to the clicked button
		document.querySelector(activeButton).classList.add('.prev-active');
	};

	// Add event listener to buttons
	document.querySelector('.next').addEventListener('click', () => {
		toggleVisibility('.second-image-container', '.first-image-container');
		toggleActiveClass('.prev', '.next');
		// Scroll to the top of the second container
		document.querySelector('.second-image-container').scrollIntoView();
		// Enable the 'prev' button and disable the 'next' button
		document.querySelector('.prev').disabled = false;
		document.querySelector('.next').disabled = true;
	});

	document.querySelector('.prev').addEventListener('click', () => {
		toggleVisibility('.first-image-container', '.second-image-container');
		toggleActiveClass('.next', '.prev');
		// Scroll to the top of the first container
		document.querySelector('.first-image-container').scrollIntoView();
		// Enable the 'next' button and disable the 'prev' button
		document.querySelector('.next').disabled = false;
		document.querySelector('.prev').disabled = true;
	});
});

// Initially disable the 'prev' button
document.querySelector('.prev').disabled = true;
