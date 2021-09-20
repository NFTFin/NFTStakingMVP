const config = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Trade',
		children: [
			{
				label: 'Exchange',
				href: '/swap',
			},
			{
				label: 'Liquidity',
				href: '/pool',
			},
			{
				label: 'LP Migration',
				href: 'https://v1exchange.pancakeswap.finance/#/migrate',
			},
		],
	},
	{
		label: 'Farms',
		href: '/farms',
	},
	{
		label: 'Pools',
		href: '/pools',
	},
	{
		label: 'Prediction (BETA',
		href: '/prediction',
	},
	{
		label: 'Lottery',
		href: '/lottery',
	},
	{
		label: 'Collectibles',
		href: '/collectibles',
	},
	{
		label: 'Team Battle',
		href: '/competition',
	},
	{
		label: 'Teams & Profile',
		children: [
			{
				label: 'Leaderboard',
				href: '/teams',
			},
			{
				label: 'Task Center',
				href: '/profile/tasks',
			},
			{
				label: 'Your Profile',
				href: '/profile',
			},
		],
	},
	{
		label: 'Info',
		href: 'https://pancakeswap.info',
	},
	{
		label: 'IFO',
		href: '/ifo',
	},
	{
		label: 'More',
		children: [
			{
				label: 'Contact',
				href: 'https://docs.pancakeswap.finance/contact-us',
			},
			{
				label: 'Voting',
				href: '/voting',
			},
			{
				label: 'Github',
				href: 'https://github.com/pancakeswap',
			},
			{
				label: 'Docs',
				href: 'https://docs.pancakeswap.finance',
			},
			{
				label: 'Blog',
				href: 'https://pancakeswap.medium.com',
			},
			{
				label: 'Merch',
				href: 'https://pancakeswap.creator-spring.com/',
			},
		],
	},
];

export default config;
