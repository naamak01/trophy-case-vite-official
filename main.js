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
	'/tann-robotics/IMG_5941.JPG',
	'/tann-robotics/IMG_5949.JPG',
	'/tann-robotics/IMG_5951.JPG',
	'/tann-robotics/IMG_5953.JPG',
	'/tann-robotics/IMG_5974.JPG',
	'/tann-robotics/IMG_6039.JPG',
];

// Front view for NECC/WSC Open Division Robotics
const images5 = [
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
];

// Front view for NECC/WSC Robotics Contest
const images6 = [
	'/necc-wsc-robotics-contest/IMG_5905.JPG',
	'/necc-wsc-robotics-contest/IMG_5907.JPG',
	'/necc-wsc-robotics-contest/IMG_5914.JPG',
	'/necc-wsc-robotics-contest/IMG_5917.JPG',
	'/necc-wsc-robotics-contest/IMG_5976.JPG',
	'/necc-wsc-robotics-contest/IMG_5978.JPG',
	'/necc-wsc-robotics-contest/IMG_6002.JPG',
];

// Front view for UPE Chili Cook Off
const images7 = ['/upe-chili/IMG_5968.JPG', '/upe-chili/IMG_5970.JPG'];

// Side and back image view of Technology Academies of Northeast Nebraska
// Robot Competition trophies
const altImages = [
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
	'./public/alt-trophy-image.jpg',
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
	'/tann-robotics/IMG_5942.JPG',
	'/tann-robotics/IMG_5950.JPG',
	'/tann-robotics/IMG_5952.JPG',
	'/tann-robotics/IMG_5954.JPG',
	'/tann-robotics/IMG_5975.JPG',
	'/tann-robotics/IMG_6040.JPG',
];

// Side and back image view of NECC/WSC Open Division Robotics
const altImages5 = [
	'/necc-wsc-robotics-open-division/IMG_5940.JPG',
	'/necc-wsc-robotics-open-division/IMG_5946.JPG',
	'/necc-wsc-robotics-open-division/IMG_6001.JPG',
	'/necc-wsc-robotics-open-division/IMG_6019.JPG',
	'/necc-wsc-robotics-open-division/IMG_6021.JPG',
	'/necc-wsc-robotics-open-division/IMG_6023.JPG',
	'/necc-wsc-robotics-open-division/IMG_6025.JPG',
	'/necc-wsc-robotics-open-division/IMG_6027.JPG',
	'/necc-wsc-robotics-open-division/IMG_6052.JPG',
	'/necc-wsc-robotics-open-division/IMG_6068.JPG',
	'/necc-wsc-robotics-open-division/IMG_6070.JPG',
];

// Side and back image view of NECC/WSC Robotics Contest
const altImages6 = [
	'/necc-wsc-robotics-contest/IMG_5906.JPG',
	'/necc-wsc-robotics-contest/IMG_5908.JPG',
	'/necc-wsc-robotics-contest/IMG_5915.JPG',
	'/necc-wsc-robotics-contest/IMG_5918.JPG',
	'/necc-wsc-robotics-contest/IMG_5977.JPG',
	'/necc-wsc-robotics-contest/IMG_5979.JPG',
	'/necc-wsc-robotics-contest/IMG_6003.JPG',
];

// Side and back image view of UPE Chili Cook Off
const altImages7 = ['/upe-chili/IMG_5969.JPG', '/upe-chili/IMG_5971.JPG'];

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
	'TANN Robotics Competition for 2007-2008. 2nd place. Competition #3.',
	'TANN Robotics Competition for 2007-2008. 2nd place. Competition #2',
	'TANN Robotics Competition for 2007-2008. 2nd place. Competition #1',
	'TANN Robotics Competition for 2007-2008.3rd place. Competition #2',
	'TANN Robotics Competition for 2007 Open Division. 1st place.',
	'TANN Academies of Northeast Nebraska Robot. Champions.',
];
// Array of alt descriptions for each NECC/WSC Open Division Robotics
const altDescriptions5 = [
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
];
// Array of alt descriptions for each NECC/WSC Robotics Contest
const altDescriptions6 = [
	'2014-2015 NECC/WSC Robotics contest. 3rd place.',
	'2014-2015 NECC/WSC Robotics contest. 1st place.',
	'2014-2015 NECC/WSC Season Robotics contest. 2nd place.',
	'2014-2015 NECC/WSC Season Robotics contest. 3rd place.',
	'2012-2013 NECC/WSC Robotics. 2nd place.',
	'2012-2013 NECC/WSC Robotics. 1st place.',
	'2011-2012 NECC/WSC Robotics. Champions.',
];
// Array of alt descriptions for each UPE Chili Cook Off
const altDescriptions7 = [
	'UPE Chili Cook-Off in 2016 2nd place',
	'UPE Chili Cook-Off in 2016 1st place',
];

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
	'Event Date: 2007-2008',
	'Event Date: 2007-2008',
	'Event Date: 2007-2008',
	'Event Date: 2007-2008',
	'Event Date: 2007',
	'Event Date: NA',
];

// Array information for date of event
// for NECC/WSC Open Division Robotics
const hoverDescriptions5 = [
	'Event Date: 2012-2013',
	'Event Date: 2012-2013',
	'Event Date: 2012-2013',
	'Event Date: 2012-2013',
	'Event Date: NA',
	'Event Date: NA',
	'Event Date: NA',
	'Event Date: NA',
	'Event Date: NA',
	'Event Date: 2012-2013',
	'Event Date: NA',
	'Event Date: NA',
];

// Array information for date of event
// for NECC/WSC Robotics Contest
const hoverDescriptions6 = [
	'Event Date: 2014-2015',
	'Event Date: 2014-2015',
	'Event Date: 2014-2015',
	'Event Date: 2014-2015',
	'Event Date: 2012-2013',
	'Event Date: 2012-2013',
	'Event Date: 2011-2012',
];

// Array information for date of event
// UPE Chili Cook Off
const hoverDescriptions7 = ['Event Date: 2016', 'Event Date: 2016'];

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
	'TANN Robotics Competition for 2007-2008. We won 2nd place. Competition #3.',
	'TANN Robotics Competition for 2007-2008. We won 2nd place. Competition #2',
	'TANN Robotics Competition for 2007-2008. We won 2nd place. Competition #1',
	'TANN Robotics Competition for 2007-2008. We won 3rd place. Competition #2',
	'TANN Robotics Competition for 2007 Open Division. We won 1st place.',
	'TANN Academies of Northeast Nebraska Robot. We were Champions.',
];

// Array for overlay infromation for
// NECC/WSC Open Division Robotics
const overlayParagraphs5 = [
	'2012-2013 NECC/WSC Robotics Open Division. We were Champions.',
	'2012-2013 NECC/WSC Robotics Open Division. We won 3rd place.',
	'2012-2013 NECC/WSC Robotics Open Division. We were Champions.',
	'NECC/WSC Robotics Open Division. We won 2nd place.',
	'NECC/WSC Robotics Open Division. We won 1st place.',
	'NECC/WSC Robotics Open Division. We won 1st place.',
	'NECC/WSC Robotics Open Division. We won 2nd place.',
	'NECC/WSC Robotics Open Division. We won 3rd place.',
	'2012-2013 NECC/WSC Robotics Open Division. We won 3rd place.',
	'NECC/WSC Robotics Open Division. We won 3rd place.',
	'NECC/WSC Robotics Open Division. We won 2nd place.',
];
// Array for overlay infromation for
// NECC/WSC Robotics Contest
const overlayParagraphs6 = [
	'2014-2015 NECC/WSC Robotics contest. We won 3rd place.',
	'2014-2015 NECC/WSC Robotics contest. We won 1st place.',
	'2014-2015 NECC/WSC Season Robotics contest.We won 2nd place.',
	'2014-2015 NECC/WSC Season Robotics contest.We won 3rd place.',
	'2012-2013 NECC/WSC Robotics.We won 2nd place.',
	'2012-2013 NECC/WSC Robotics.We won 1st place.',
	'2011-2012 NECC/WSC Robotics.We were Champions.',
];
// Array for overlay infromation for
// UPE Chili Cook Off
const overlayParagraphs7 = [
	'UPE Chili Cook-Off in 2016. We won 2nd place.',
	'UPE Chili Cook-Off in 2016. We won 1st place.',
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
