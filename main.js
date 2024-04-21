// Imports to allow JS file use the css attributes
import './style.css';

// Front end view of Technology Academies of Northeast Nebraska
// Robot Competition trophies
const images = [
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
	'./public/trophy.jpg',
];

// Front view for NECC/WSC Robotics College Division trophies
const images2 = [
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
	'./stand-by-trophy.jpg',
];

// Front view for Nebraska College Programming
//Competition/Contest
const images3 = [
	'/girl-lift-trophy.jpg',
	'/girl-lift-trophy.jpg',
	'/girl-lift-trophy.jpg',
	'/girl-lift-trophy.jpg',
	'/girl-lift-trophy.jpg',
	'/girl-lift-trophy.jpg',
	'/girl-lift-trophy.jpg',
	'/girl-lift-trophy.jpg',
	'/girl-lift-trophy.jpg',
	'/girl-lift-trophy.jpg',
	'/girl-lift-trophy.jpg',
	'/girl-lift-trophy.jpg',
	'/girl-lift-trophy.jpg',
];

// Front view for Tann Robotics Competition Trophies
const images4 = [
	'/guy-see-me.jpg',
	'/guy-see-me.jpg',
	'/guy-see-me.jpg',
	'/guy-see-me.jpg',
	'/guy-see-me.jpg',
	'/guy-see-me.jpg',
];

// Front view for NECC/WSC Open Division Robotics
const images5 = [
	'/pexels-anna.jpg',
	'/pexels-anna.jpg',
	'/pexels-anna.jpg',
	'/pexels-anna.jpg',
	'/pexels-anna.jpg',
];

// Front view for NECC/WSC Robotics Contest
const images6 = [
	'/trophy-golf-guy.jpg',
	'/trophy-golf-guy.jpg',
	'/trophy-golf-guy.jpg',
	'/trophy-golf-guy.jpg',
	'/trophy-golf-guy.jpg',
];

// Front view for UPE Chili Cook Off
const images7 = ['/golf-trophy.jpg', '/golf-trophy.jpg'];

// Side and back image view of Technology Academies of Northeast Nebraska
// Robot Competition trophies
const altImages = [
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
	'../public/alt-trophy-image.jpg',
];

// Side and back image view of NECC/WSC Robotics College Division
const altImages2 = [
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
	'/lifting-trophy.jpg',
];

// Side and back image view of Nebraska College Programming
//Competition/Contest
const altImages3 = [
	'/girl-kneel-with-trophy.jpg',
	'/girl-kneel-with-trophy.jpg',
	'/girl-kneel-with-trophy.jpg',
	'/girl-kneel-with-trophy.jpg',
	'/girl-kneel-with-trophy.jpg',
	'/girl-kneel-with-trophy.jpg',
	'/girl-kneel-with-trophy.jpg',
	'/girl-kneel-with-trophy.jpg',
	'/girl-kneel-with-trophy.jpg',
	'/girl-kneel-with-trophy.jpg',
	'/girl-kneel-with-trophy.jpg',
	'/girl-kneel-with-trophy.jpg',
	'/girl-kneel-with-trophy.jpg',
];

// Side and back image view of Tann Robotics Competition Trophies
const altImages4 = [
	'/guy-see-mee-applaud.jpg',
	'/guy-see-mee-applaud.jpg',
	'/guy-see-mee-applaud.jpg',
	'/guy-see-mee-applaud.jpg',
	'/guy-see-mee-applaud.jpg',
	'/guy-see-mee-applaud.jpg',
];

// Side and back image view of NECC/WSC Open Division Robotics
const altImages5 = [
	'/pexels-anna-happy.jpg',
	'/pexels-anna-happy.jpg',
	'/pexels-anna-happy.jpg',
	'/pexels-anna-happy.jpg',
	'/pexels-anna-happy.jpg',
];

// Side and back image view of NECC/WSC Robotics Contest
const altImages6 = [
	'/trophy-golf.jpg',
	'/trophy-golf.jpg',
	'/trophy-golf.jpg',
	'/trophy-golf.jpg',
	'/trophy-golf.jpg',
];

// Side and back image view of UPE Chili Cook Off
const altImages7 = ['/golf-trophy-girl.jpg', '/golf-trophy-girl.jpg'];

// Array of alt descriptions for each image NECC/WSC Robotics Contest
const altDescriptions = [
	'Gold Trophy',
	'Silver Trophy',
	'Bronze Trophy',
	'Platinum Trophy',
	'Diamond Trophy',
	'Ruby Trophy',
	'Sapphire Trophy',
	'Emerald Trophy',
	'Sapphire Trophy',
	'Emerald Trophy',
	'Ruby Trophy',
	'Sapphire Trophy',
	'Emerald Trophy',
	'Sapphire Trophy',
	'Emerald Trophy',
	'Sapphire Trophy',
	'Emerald Trophy',
];

// Array of alt descriptions for  each NECC/WSC Robotics College Division
const altDescriptions2 = [
	'Gold Trophy',
	'Silver Trophy',
	'Bronze Trophy',
	'Platinum Trophy',
	'Diamond Trophy',
	'Ruby Trophy',
	'Sapphire Trophy',
	'Emerald Trophy',
	'Sapphire Trophy',
	'Emerald Trophy',
	'Ruby Trophy',
	'Sapphire Trophy',
	'Emerald Trophy',
	'Sapphire Trophy',
	'Emerald Trophy',
	'Sapphire Trophy',
	'Emerald Trophy',
];

// Array of alt descriptions for  each Nebraska College Programming
//Competition/Contest
const altDescriptions3 = [
	'Gold Trophy',
	'Silver Trophy',
	'Bronze Trophy',
	'Platinum Trophy',
	'Diamond Trophy',
	'Ruby Trophy',
	'Sapphire Trophy',
	'Emerald Trophy',
	'Sapphire Trophy',
	'Emerald Trophy',
	'Ruby Trophy',
	'Sapphire Trophy',
	'Emerald Trophy',
];

// Array of alt descriptions for each Tann Robotics Competition Trophies
const altDescriptions4 = [
	'Gold Trophy',
	'Silver Trophy',
	'Bronze Trophy',
	'Platinum Trophy',
	'Diamond Trophy',
	'Ruby Trophy',
];
// Array of alt descriptions for each NECC/WSC Open Division Robotics
const altDescriptions5 = [
	'Gold Trophy',
	'Silver Trophy',
	'Bronze Trophy',
	'Platinum Trophy',
	'Diamond Trophy',
];
// Array of alt descriptions for each NECC/WSC Robotics Contest
const altDescriptions6 = [
	'Gold Trophy',
	'Silver Trophy',
	'Bronze Trophy',
	'Platinum Trophy',
	'Diamond Trophy',
];
// Array of alt descriptions for each UPE Chili Cook Off
const altDescriptions7 = ['Gold Trophy', 'Silver Trophy'];

// Array of information for date Technology Academies of Northeast
//Nebraska Robot Competition trophies
const hoverDescriptions = [
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
];
// Array information for date of event
// for NECC/WSC Robotics College Division
const hoverDescriptions2 = [
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
];

// Array information for date of event
// for Nebraska College Programming Competition/Contest
const hoverDescriptions3 = [
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
];

// Array information for date of event
// for Tann Robotics Competition Trophies
const hoverDescriptions4 = [
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
];

// Array information for date of event
// for NECC/WSC Open Division Robotics
const hoverDescriptions5 = [
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
];

// Array information for date of event
// for NECC/WSC Robotics Contest
const hoverDescriptions6 = [
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
	'Date of event',
];

// Array information for date of event
// UPE Chili Cook Off
const hoverDescriptions7 = ['Date of event', 'Date of event'];

// Array for overlay infromation for Technology Academies of Northeast
//Nebraska Robot Competition trophies
const overlayParagraphs = [
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
];

// Array for overlay infromation for
// NECC/WSC Robotics College Division
const overlayParagraphs2 = [
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
];

// Array for overlay infromation for
// Nebraska College Programming Competition/Contest
const overlayParagraphs3 = [
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
];

// Array for overlay infromation for
// Tann Robotics Competition Trophies
const overlayParagraphs4 = [
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
];

// Array for overlay infromation for
// NECC/WSC Open Division Robotics
const overlayParagraphs5 = [
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
];
// Array for overlay infromation for
// NECC/WSC Robotics Contest
const overlayParagraphs6 = [
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
];
// Array for overlay infromation for
// UPE Chili Cook Off
const overlayParagraphs7 = [
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
	'Paragraph 1 for the first image. The was a robotic competition in 2015. We won first place. Regionals',
];

// Putting it all together in in an object to re-use later
const imageDataObject = {
	images,
	images2,
	images3,
	images4,
	images5,
	images6,
	images7,
	altImages,
	altImages2,
	altImages3,
	altImages4,
	altImages5,
	altImages6,
	altImages7,
	altDescriptions,
	altDescriptions2,
	altDescriptions3,
	altDescriptions4,
	altDescriptions5,
	altDescriptions6,
	altDescriptions7,
	hoverDescriptions,
	hoverDescriptions2,
	hoverDescriptions3,
	hoverDescriptions4,
	hoverDescriptions5,
	hoverDescriptions6,
	hoverDescriptions7,
	overlayParagraphs,
	overlayParagraphs2,
	overlayParagraphs3,
	overlayParagraphs4,
	overlayParagraphs5,
	overlayParagraphs6,
	overlayParagraphs7,
};

// Function to create an array of objects with matched properties
function matchProperties(data) {
	const result = [];
	for (let i = 0; i < data.images.length; i++) {
		result.push({
			image: data.images[i],
			altImage: data.altImages[i],
			altDescription: data.altDescriptions[i],
			hoverDescription: data.hoverDescriptions[i],
			overlayParagraph: data.overlayParagraphs[i],
		});
	}
	return result;
}

// Match properties for the Technology Academies of Northeast Nebraska
// Robot Competition trophies
const matchedImages1 = matchProperties({
	images: imageDataObject.images,
	altImages: imageDataObject.altImages,
	altDescriptions: imageDataObject.altDescriptions,
	hoverDescriptions: imageDataObject.hoverDescriptions,
	overlayParagraphs: imageDataObject.overlayParagraphs,
});

// Match properties for the NECC/WSC Robotics College Division images
const matchedImages2 = matchProperties({
	images: imageDataObject.images2,
	altImages: imageDataObject.altImages2,
	altDescriptions: imageDataObject.altDescriptions2,
	hoverDescriptions: imageDataObject.hoverDescriptions2,
	overlayParagraphs: imageDataObject.overlayParagraphs2,
});

// Match properties for the NECC/WSC Robotics College Division images
const matchedImages3 = matchProperties({
	images: imageDataObject.images3,
	altImages: imageDataObject.altImages3,
	altDescriptions: imageDataObject.altDescriptions3,
	hoverDescriptions: imageDataObject.hoverDescriptions3,
	overlayParagraphs: imageDataObject.overlayParagraphs3,
});

// Match properties for the Tann Robotics Competition Trophies
const matchedImages4 = matchProperties({
	images: imageDataObject.images4,
	altImages: imageDataObject.altImages4,
	altDescriptions: imageDataObject.altDescriptions4,
	hoverDescriptions: imageDataObject.hoverDescriptions4,
	overlayParagraphs: imageDataObject.overlayParagraphs4,
});

// Match properties for the NECC/WSC Open Division Robotics images
const matchedImages5 = matchProperties({
	images: imageDataObject.images5,
	altImages: imageDataObject.altImages5,
	altDescriptions: imageDataObject.altDescriptions5,
	hoverDescriptions: imageDataObject.hoverDescriptions5,
	overlayParagraphs: imageDataObject.overlayParagraphs5,
});

// Match properties for the NECC/WSC Robotics Contest images
const matchedImages6 = matchProperties({
	images: imageDataObject.images6,
	altImages: imageDataObject.altImages6,
	altDescriptions: imageDataObject.altDescriptions6,
	hoverDescriptions: imageDataObject.hoverDescriptions6,
	overlayParagraphs: imageDataObject.overlayParagraphs6,
});

// Match properties for the UPE Chili Cook Off images
const matchedImages7 = matchProperties({
	images: imageDataObject.images7,
	altImages: imageDataObject.altImages7,
	altDescriptions: imageDataObject.altDescriptions7,
	hoverDescriptions: imageDataObject.hoverDescriptions7,
	overlayParagraphs: imageDataObject.overlayParagraphs7,
});

// Function to display images in a container
function displayImages(container, imageData) {
	imageData.forEach((image) => {
		const imageContainerItem = document.createElement('div');
		imageContainerItem.className = 'animating-container';

		const img = document.createElement('img');
		img.src = image.image;
		img.alt = image.altDescription;
		imageContainerItem.appendChild(img);

		const tooltip = document.createElement('span');
		tooltip.textContent = image.hoverDescription;
		tooltip.className = 'tooltip-css';
		tooltip.style.visibility = 'hidden';
		tooltip.style.opacity = '0'; // Initially hidden
		imageContainerItem.appendChild(tooltip);

		// Event listeners for mouseover and mouseout
		img.addEventListener('mouseover', () => {
			img.src = image.altImage; // Set the image source to the selected alt image
			tooltip.style.visibility = 'visible'; // Show the tooltip
			tooltip.style.opacity = '1'; // Ensure the tooltip is fully opaque
		});

		img.addEventListener('mouseout', () => {
			img.src = image.image; // Revert to original image
			tooltip.style.visibility = 'hidden'; // Hide the tooltip
			tooltip.style.opacity = '0'; // Ensure the tooltip is fully transparent
		});

		// Variable storing click for more information
		// Create a link element
		const moreInfoLink = document.createElement('a');
		moreInfoLink.href = 'your-link-here'; // Set the link URL
		moreInfoLink.textContent = 'More Info Click'; // Set the link text
		moreInfoLink.className = 'more-info-link'; // Add a class for styling
		imageContainerItem.appendChild(moreInfoLink);

		moreInfoLink.addEventListener('click', function (event) {
			event.preventDefault(); // Prevent the default link behavior

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
			modalContent.textContent = image.overlayParagraph;

			modal.appendChild(modalContent);
			document.body.appendChild(modal);

			// Add functionality to close the modal
			modal.addEventListener('click', function () {
				document.body.removeChild(modal);
			});
		});

		container.appendChild(imageContainerItem);
	});
}

// Get the container elements
// Calling id from the image container in index.html
// Using DOM to do this
const imageContainer = document.getElementById('image-container');
const imageContainer2 = document.getElementById('image-container2');
const imageContainer3 = document.getElementById('image-container3');
const imageContainer4 = document.getElementById('image-container4');
const imageContainer5 = document.getElementById('image-container5');
const imageContainer6 = document.getElementById('image-container6');
const imageContainer7 = document.getElementById('image-container7');

// Call the function for both containers
// Display the first set of matched images
displayImages(imageContainer, matchedImages1);

// Display the second set of matched images for
displayImages(imageContainer2, matchedImages2);

// Display the third set of matched images for
displayImages(imageContainer3, matchedImages3);

// Display the forth set of matched images for
displayImages(imageContainer4, matchedImages4);

// // Display the fifth set of matched images for
displayImages(imageContainer5, matchedImages5);

// // Display the sixth set of matched images for
displayImages(imageContainer6, matchedImages6);

// // Display the seventh set of matched images for
displayImages(imageContainer7, matchedImages7);
