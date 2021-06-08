import { Switch } from 'react-router';
import './App.css';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

import Navbar2 from './components/Navbar/Navbar2';

import UpBar from './components/Navbar/UpBar';
import Slider from './components/Slider/Slider';
function App() {
	return (
		<div class='flex flex-col min-h-screen '>
			<UpBar />
			<Navbar2 />
			<Switch>
				<div class='flex-grow box-border'>
					<Slider />
				</div>
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
