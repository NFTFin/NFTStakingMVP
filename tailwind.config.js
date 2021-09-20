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
				// unfoldDown: {
				// 	from: {
				// 		maxHeight: '0',
				// 	},
				// 	to: {
				// 		maxHeight: 'auto',
				// 	},
				// },
				// foldUp: {
				// 	from: {
				// 		maxHeight: 'auto',
				// 	},
				// 	to: {
				// 		maxHeight: '0px',
				// 	},
				// },
			},
			animation: {
				zoomIn: 'zoomIn 0.3s ease-in-out',
				fadeOut: 'fadeOut 0.3s ease-in-out',
				// unfoldDown: 'unfoldDown 1s ease-in-out',
				// foldUp: 'foldUp 1s ease-in-out',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
