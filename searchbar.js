// Imports to allow JS file use the css attributes
import './main.js';
import './searchbar.js';
import './style.css';

// // Array of names for the trophies on the website to use for search
let trophyImages = [
	// Front end view of Technology Academies of Northeast Nebraska
	// Robot Competition trophies
	'/technology-academies/IMG_5937.JPG',
	'/technology-academies/IMG_5943.JPG',
	'/technology-academies/IMG_5972.JPG',
	'/technology-academies/IMG_5982.JPG',
	'/technology-academies/IMG_5984.JPG',
	'/technology-academies/IMG_5986.JPG',
	'/technology-academies/IMG_5988.JPG',
	'/technology-academies/IMG_5990.JPG',
	'/technology-academies/IMG_5993.JPG',
	'/technology-academies/IMG_5995.JPG',
	'/technology-academies/IMG_5997.JPG',
	'/technology-academies/IMG_6029.JPG',
	'/technology-academies/IMG_6031.JPG',
	'/technology-academies/IMG_6033.JPG',
	'/technology-academies/IMG_6035.JPG',
	'/technology-academies/IMG_6037.JPG',
	'/technology-academies/IMG_6075.JPG',
	'/technology-academies/IMG_6077.JPG',

	// Front view for NECC/WSC Robotics College Division trophies
	'/necc-wsc-robotics-college-division/IMG_5912.JPG',
	'/necc-wsc-robotics-college-division/IMG_5930.JPG',
	'/necc-wsc-robotics-college-division/IMG_5931.JPG',
	'/necc-wsc-robotics-college-division/IMG_5933.JPG',
	'/necc-wsc-robotics-college-division/IMG_5935.JPG',
	'/necc-wsc-robotics-college-division/IMG_5947.JPG',
	'/necc-wsc-robotics-college-division/IMG_5980.JPG',
	'/necc-wsc-robotics-college-division/IMG_6044.JPG',
	'/necc-wsc-robotics-college-division/IMG_6053.JPG',
	'/necc-wsc-robotics-college-division/IMG_6055.JPG',
	'/necc-wsc-robotics-college-division/IMG_6059.JPG',
	'/necc-wsc-robotics-college-division/IMG_6061.JPG',
	'/necc-wsc-robotics-college-division/IMG_6063.JPG',
	'/necc-wsc-robotics-college-division/IMG_6065.JPG',
	'/necc-wsc-robotics-college-division/IMG_6071.JPG',
	'/necc-wsc-robotics-college-division/IMG_6073.JPG',

	// Front view for Nebraska College Programming
	//Competition/Contest
	'/nebraska-college-programming/IMG_5920.JPG',
	'/nebraska-college-programming/IMG_5922.JPG',
	'/nebraska-college-programming/IMG_5925.JPG',
	'/nebraska-college-programming/IMG_5955.JPG',
	'/nebraska-college-programming/IMG_5957.JPG',
	'/nebraska-college-programming/IMG_5959.JPG',
	'/nebraska-college-programming/IMG_5962.JPG',
	'/nebraska-college-programming/IMG_5964.JPG',
	'/nebraska-college-programming/IMG_5966.JPG',
	'/nebraska-college-programming/IMG_6043.JPG',
	'/nebraska-college-programming/IMG_6047.JPG',
	'/nebraska-college-programming/IMG_6049.JPG',
	'/nebraska-college-programming/IMG_6057.JPG',

	// Front view for Tann Robotics Competition Trophies
	'/tann-robotics/IMG_5941.JPG',
	'/tann-robotics/IMG_5949.JPG',
	'/tann-robotics/IMG_5951.JPG',
	'/tann-robotics/IMG_5953.JPG',
	'/tann-robotics/IMG_5974.JPG',
	'/tann-robotics/IMG_6039.JPG',

	// Front view for NECC/WSC Open Division Robotics
	'/necc-wsc-robotics-open-division/IMG_5939.JPG',
	'/necc-wsc-robotics-open-division/IMG_5945.JPG',
	'/necc-wsc-robotics-open-division/IMG_5999.JPG',
	'/necc-wsc-robotics-open-division/IMG_6018.JPG',
	'/necc-wsc-robotics-open-division/IMG_6020.JPG',
	'/necc-wsc-robotics-open-division/IMG_6022.JPG',
	'/necc-wsc-robotics-open-division/IMG_6024.JPG',
	'/necc-wsc-robotics-open-division/IMG_6026.JPG',
	'/necc-wsc-robotics-open-division/IMG_6051.JPG',
	'/necc-wsc-robotics-open-division/IMG_6067.JPG',
	'/necc-wsc-robotics-open-division/IMG_6069.JPG',

	// Front view for NECC/WSC Robotics Contest
	'/necc-wsc-robotics-contest/IMG_5905.JPG',
	'/necc-wsc-robotics-contest/IMG_5907.JPG',
	'/necc-wsc-robotics-contest/IMG_5914.JPG',
	'/necc-wsc-robotics-contest/IMG_5917.JPG',
	'/necc-wsc-robotics-contest/IMG_5976.JPG',
	'/necc-wsc-robotics-contest/IMG_5978.JPG',
	'/necc-wsc-robotics-contest/IMG_6002.JPG',

	// Front view for UPE Chili Cook Off
	'/upe-chili/IMG_5968.JPG',
	'/upe-chili/IMG_5970.JPG',
];

// BEGINING OF ALT ARRAYS FOR DESCRIBING IMAGES IN TERMS OF MAKING IT ACCESSIBLE
// Array of alt descriptions for each image Technology Academies of Northeast Nebraska Robot Competition
const altDescriptions = [
	'Technologies Academies of Northeast Nebraska Robot Competition. 2nd place.',
	'Technologies Academies of Northeast Nebraska Robot Competition. 1st place.',
	'Technologies Academies of Northeast Nebraska Robot Competition. 3rd place.',
	'Technologies Academies of Northeast Nebraska Robot Competition 1. 3rd place.',
	'Technologies Academies of Northeast Nebraska Robot Competition 1. 2nd place.',
	'Technologies Academies of Northeast Nebraska Robot Competition 3. 1st place.',
	'Technologies Academies of Northeast Nebraska Robot Competition 4. 1st place.',
	'Technologies Academies of Northeast Nebraska Robot Competition 2. 2nd place.',
	'Technologies Academies of Northeast Nebraska Robot Competition 2. 1st place.',
	'Technologies Academies of Northeast Nebraska Robot Competition 3. 3rd place.',
	'Technologies Academies of Northeast Nebraska Robot Competition 4. 3rd place.',
	'Technologies Academies of Northeast Nebraska Robot Competition. 2nd place.',
	'Technologies Academies of Northeast Nebraska Robot Competition. 1st place.',
	'Technologies Academies of Northeast Nebraska Robot Competition. 3rd place.',
	'Technologies Academies of Northeast Nebraska Robot Competition 1. 3rd place.',
	'Technologies Academies of Northeast Nebraska Robot Competition 1. 2nd place.',
	'Technologies Academies of Northeast Nebraska Robot Competition 3. 1st place.',
	'Technologies Academies of Northeast Nebraska Robot Competition 4. 1st place.',

	// Array of alt descriptions for  each NECC/WSC Robotics College Division
	'NECC/WSC Robotics College Division. 1st Place.',
	'NECC/WSC Robotics College Division. 2nd place.',
	'NECC/WSC Robotics College Division. 2nd place.',
	'NECC/WSC Robotics College Division. 3rd place.',
	'NECC/WSC Robotics College Division. 3rd place.',
	'NECC/WSC Robotics College Division. 3rd place.',
	'NECC/WSC Robotics College Division. 1st place.',
	'2013-2014 NECC/WSC Robotics College Division. Champions.',
	'2010-2011 NECC/WSC Robotics College Division. 1st place.',
	'2010-2011 NECC/WSC Robotics College Division. 3rd place.',
	'NECC/WSC Robotics College Division. 1st place.',
	'NECC/WSC Robotics College Division. 1st place.',
	'2009-2010 NECC/WSC Robotics College Division. 3rd place.',
	'2009-2010 NECC/WSC Robotics College Division. 1st place.',
	'NECC/WSC Robotics College Division. 1st place.',
	'NECC/WSC Robotics College Division. 3rd place.',

	// Array of alt descriptions for  each Nebraska College Programming
	//Competition/Contest
	'Nebraska College Computer Programming Contest for 2006. 2nd place.',
	'Nebraska Community College,Nebraska College Computer Programming Contest for 2004. 2nd place.',
	'Nebraska Community College,Nebraska College Computer Programming Contest for 2005. 1st place.',
	'Nebraska College Computer Programming Contest for 2003. 2nd place.',
	'Nebraska College Computer Programming Contest for 2003. 3rd place.',
	'NECC Programming Contest for 2014. 1st place.',
	'NECC Programming Contest for 2011. 1st place.',
	'NECC Programming Contest for 2014. 3rd place.',
	'NECC Programming Contest for 2013. 1st place.',
	'NECC Computer Programming Contest for 2015. 1st place.',
	'NECC Computer Programming Contest for 2009. 1st place.',
	'NECC Programming Contest College Division. 3rd place.',
	'NECC Programming Contest for 2010. 2nd place.',

	// Array of alt descriptions for each Tann Robotics Competition Trophies
	'TANN Robotics Competition for 2007-2008. 2nd place. Competition #3.',
	'TANN Robotics Competition for 2007-2008. 2nd place. Competition #2',
	'TANN Robotics Competition for 2007-2008. 2nd place. Competition #1',
	'TANN Robotics Competition for 2007-2008.3rd place. Competition #2',
	'TANN Robotics Competition for 2007 Open Division. 1st place.',
	'TANN Academies of Northeast Nebraska Robot. Champions.',

	// Array of alt descriptions for each NECC/WSC Open Division Robotics
	'2012-2013 NECC/WSC Robotics Open Division. Champions.',
	'2012-2013 NECC/WSC Robotics Open Division. 3rd place.',
	'2012-2013 NECC/WSC Robotics Open Division. Champions.',
	'NECC/WSC Robotics Open Division. 2nd place.',
	'NECC/WSC Robotics Open Division. 1st place.',
	'NECC/WSC Robotics Open Division. 1st place.',
	'NECC/WSC Robotics Open Division. 2nd place.',
	'NECC/WSC Robotics Open Division. 3rd place.',
	'2012-2013 NECC/WSC Robotics Open Division. 3rd place.',
	'NECC/WSC Robotics Open Division. 3rd place.',
	'NECC/WSC Robotics Open Division. 2nd place.',

	// Array of alt descriptions for each NECC/WSC Robotics Contest
	'2014-2015 NECC/WSC Robotics contest. 3rd place.',
	'2014-2015 NECC/WSC Robotics contest. 1st place.',
	'2014-2015 NECC/WSC Season Robotics contest. 2nd place.',
	'2014-2015 NECC/WSC Season Robotics contest. 3rd place.',
	'2012-2013 NECC/WSC Robotics. 2nd place.',
	'2012-2013 NECC/WSC Robotics. 1st place.',
	'2011-2012 NECC/WSC Robotics. Champions.',
	// Array of alt descriptions for each UPE Chili Cook Off
	'UPE Chili Cook-Off in 2016 2nd place',
	'UPE Chili Cook-Off in 2016 1st place',
];

// Create an array of [alt, image] pairs
const altImagePairs = altDescriptions.map((alt, i) => [alt, trophyImages[i]]);
const imageSlider = document.querySelector('.main-slider-container');
const title = document.querySelector('.title');
// Select all the containers where you want to display the results
const trophyContainers = document.querySelectorAll(
	'.image-container1-sub-div, .image-container1-sub-div2, .image-container1-sub-div3, .image-container2-sub-div4, .image-container2-sub-div5, .image-container2-sub-div6, .image-container2-sub-div7'
);

// Convert the array of pairs to an object
const altImageMap = Object.fromEntries(altImagePairs);

// Calling the class for the search bar to use
const searchBar = document.querySelector('.search-bar');

searchBar.addEventListener('keyup', (e) => {
	const searchString = e.target.value.toLowerCase();

	if (searchString === '') {
		// If the search bar is empty, restore the original display
		imageSlider.style.display = ''; // Show the main content
		title.style.display = ''; // Show the main content

		trophyContainers.forEach((container) => {
			container.innerHTML = ''; // Clear the current content
		});
	} else {
		// If the search bar is not empty, filter and display the trophies
		const filteredTrophies = Object.entries(altImageMap)
			.filter(([alt]) => alt.toLowerCase().includes(searchString))
			.map(([alt]) => alt);

		displayCh(filteredTrophies);
	}
});

function displayCh(filteredTrophies) {
	// Select the main content where you want to hide everything
	imageSlider.style.display = 'none'; // Hide the main content
	title.style.display = 'none'; // Hide the main content

	// Calculate the number of images per container
	const imagesPerContainer = Math.ceil(
		filteredTrophies.length / trophyContainers.length
	);

	// Loop through each container
	trophyContainers.forEach((container, i) => {
		// Clear the current content
		container.innerHTML = '';

		// Create a new div for the images
		const imageContainer = document.createElement('div');
		imageContainer.id = 'searchImage-container';

		// Get the trophies for this container
		const trophies = filteredTrophies.slice(
			i * imagesPerContainer,
			(i + 1) * imagesPerContainer
		);

		// Loop through the trophies
		trophies.forEach((trophy) => {
			// Create a new div element for each trophy
			const trophyDiv = document.createElement('div');
			trophyDiv.id = 'image-container'; // Adjust this to match the original HTML

			// Add margin to the top and bottom of the div
			trophyDiv.style.marginTop = '14px';
			trophyDiv.style.marginBottom = '14px';

			// Create a new img element for each trophy
			const trophyImg = document.createElement('img');

			// Set the src attribute to the corresponding image URL
			trophyImg.src = altImageMap[trophy];

			// Add the CSS class to the img element
			trophyImg.classList.add('trophy-images');

			// Add the event listeners for mouseover and mouseout
			trophyImg.addEventListener('mouseover', () => {
				trophyImg.src = altImageMap[trophy]; // Set the image source to the selected alt image
				// Show the tooltip
				// Ensure the tooltip is fully opaque
			});

			trophyImg.addEventListener('mouseout', () => {
				trophyImg.src = altImageMap[trophy]; // Revert to original image
				// Hide the tooltip
				// Ensure the tooltip is fully transparent
			});

			// Add the click event listener
			trophyImg.addEventListener('click', function () {
				// Prevent the default link behavior

				// Create a modal or overlay to display the paragraph
				const modal = document.createElement('div');
				modal.style.position = 'fixed';
				modal.style.top = '0';
				modal.style.left = '0';
				modal.style.width = '100%';
				modal.style.height = '100%';
				modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
				modal.style.display = 'flex';
				modal.style.justifyContent = 'center';
				modal.style.alignItems = 'center';
				modal.style.zIndex = '9999';

				const modalContent = document.createElement('div');
				modalContent.style.backgroundColor = '#fff';
				modalContent.style.color = 'rgb(45, 44, 44, 0.9)';
				modalContent.style.padding = '30px 30px';
				modalContent.style.borderRadius = '5px';
				modalContent.style.height = '300px';
				modalContent.style.width = '300px';
				modalContent.style.fontSize = '1.5rem';
				modalContent.style.fontWeight = '600';
				modalContent.style.lineHeight = '3rem';
				modalContent.style.display = 'flex';
				modalContent.style.justifyContent = 'center';
				modalContent.style.alignItems = 'center';
				modalContent.textContent = trophy; // Display the alt description in the modal

				modal.appendChild(modalContent);
				document.body.appendChild(modal);

				// Add functionality to close the modal
				modal.addEventListener('click', function () {
					document.body.removeChild(modal);
				});
			});

			// Append the img element to the trophy div
			trophyDiv.appendChild(trophyImg);

			// Append the trophy div to the container
			container.appendChild(trophyDiv);
		});
	});
}
