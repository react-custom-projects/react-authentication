// Configure your environment
const APP_CONFIG = {
	// Base APP URL
	URL: {
		base: 'http://support.probiller.local:8002',
	},

	// API request URLs
	API: {
		base: '//localhost:3001/',
	},

	// CDN
	CDN: {
		image: 'http://cdn-d-assets.probiller.com',
		imageSecondary: 'http://cdn-e-assets.probiller.com',
		logos: 'http://cdn-d-assets.probiller.com/stage_logos',
	},

	// Google Analytics
	ANALYTICS: {
		UA: 'UA-73427892-1',
		domain: 'auto',
	},

	// Enable or disable features
	features: {
		emails: true,
	},
};

export { APP_CONFIG };
