module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			gridTemplateColumns: {
				card: 'repeat(auto-fill, minmax(260px, 1fr))',
			},
			backgroundColor: {
				mask: 'rgba(0,0,0,0.5)',
			},
			keyframes: {
				zoomIn: {
					'0%': {
						transform: 'scale(0.95)',
					},
					'66%': {
						transform: 'scale(1.05)',
					},
					'100%': {
						transform: 'scale(1.0)',
					},
				},
				fadeOut: {
					from: {
						opacity: 1,
					},
					to: {
						opacity: 0,
					},
				},
			},
			animation: {
				zoomIn: 'zoomIn 0.3s ease-in-out',
				fadeOut: 'fadeOut 0.3s ease-in-out',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
