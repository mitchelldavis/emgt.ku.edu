var sitemap = require('express-sitemap');

sitemap({
	map: {
		'/about': ['get'],
		'/admission': ['get'],
		'/admission-requirements': ['get'],
		'/contact-us': ['get'],
		'/courses': ['get'],
		'/current-student/overivew': ['get'],
		'/current-student/tuition': ['get'],
		'/current-student/courses': ['get'],
		'/current-student/policies': ['get'],
		'/current-student/course-schedules': ['get'],
		'/current-student/textbooks': ['get'],
		'/decree-comparisions': ['get'],
		'/distance-learning': ['get'],
		'/facilities': ['get'],
		'/faculty': ['get'],
		'/faq': ['get'],
		'/': ['get'],
		'/key-aspects': ['get'],
		'/people': ['get'],
		'/program': ['get'],
		'/program-requirements': ['get'],
		'/tuition': ['get']
	}
}).XMLtoFile();
