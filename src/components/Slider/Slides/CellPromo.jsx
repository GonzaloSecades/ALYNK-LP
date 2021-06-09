function CellPromo() {
	return (
		<div class='md:flex '>
			<div class='flex items-center justify-center w-full px-6 py-8 md:h-128 md:w-1/2'>
				<div class='max-w-xl'>
					<h2 class='text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
						Build
						Your
						New{' '}
						<span class='text-indigo-600 dark:text-indigo-400'>
							Idea
						</span>
					</h2>

					<p class='mt-2 text-sm text-gray-500 dark:text-gray-400 md:text-base'>
						Lorem
						ipsum
						dolor
						sit
						amet,
						consectetur
						adipisicing
						elit.
						Blanditiis
						commodi
						cum
						cupiditate
						ducimus,
						fugit
						harum
						id
						necessitatibus
						odio
						quam
						quasi,
						quibusdam
						rem
						tempora
						voluptates.
					</p>

					<div class='flex mt-6'>
						<a
							href='#'
							class='block px-3 py-2 text-xs font-semibold text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700'
						>
							Get
							Started
						</a>
						<a
							href='#'
							class='block px-3 py-2 mx-4 text-xs font-semibold text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md hover:bg-gray-300'
						>
							Learn
							More
						</a>
					</div>
				</div>
			</div>

			<div class='w-full h-64 md:w-1/2 md:h-auto'></div>
		</div>
	);
}

export default CellPromo;
