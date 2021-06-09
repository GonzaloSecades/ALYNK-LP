import { Carousel } from 'react-responsive-carousel';
import CellPromo from '../Slider/Slides/CellPromo';

const config =
	() => ({
		// autoPlay: true,
		// infiniteLoop: true,
		interval: 5500,
		showThumbs: false,
	});

const Promo =
	() => {
		return (
			<Carousel
				className='mt-2 mb-3 '
				{...config()}
			>
				<div>
					<a href='/cedears'>
						<img
							class=' h-full object-fill'
							src='./images/slider/cedears2.png'
						/>
					</a>
				</div>
				<div>
					<img src='./images/slider/newmep.png' />
				</div>

				<div
					style={{
						backgroundImage: `url("./images/slider/cedears2.png")`,
					}}
					className='bg-auto bg-no-repeat bg-center'
				>
					<button>
						ASDASDASD
					</button>
				</div>
				{/* <CellPromo /> */}
			</Carousel>
		);
	};

export default Promo;
