const colors = require('tailwindcss/colors');

module.exports =
	{
		purge: [
			'./src/**/*.{js,jsx,ts,tsx}',
			'./public/index.html',
		],
		darkMode: false, // or 'media' or 'class'
		theme: {
			extend:
				{
					colors:
						{
							alynkPrimary:
								'#012c3d',
							alynkSecondary:
								'#36b37e',
							alynkDisable:
								'#EDEDEA',
							alynkWebBlue:
								'#004959',
						},
					fontFamily:
						{
							sans:
								[
									'AlynkAppFonts',
								],
						},
					spacing:
						{
							128: '32rem',
						},
					screens:
						{
							xs: {
								max: '575px',
							}, // Mobile (iPhone 3 - iPhone XS Max).
							// Desktop widescreen.
						},
				},
		},
		variants:
			{
				extend:
					{},
			},
		plugins:
			[],
	};
