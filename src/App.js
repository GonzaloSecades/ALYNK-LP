import { Switch, Route } from 'react-router-dom';
import aranceles from './Aranceles.pdf';
import './App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Navbar2 from './components/Navbar/Navbar2';
import UpBar from './components/Navbar/UpBar';
import Slider from './components/Slider3/Slider';
import Productos from './components/Productos/Productos';
import Aranceles from './components/Aranceles/Aranceles';

function App() {
 return (
  <div class='flex flex-col min-h-screen '>
   <UpBar />
   <Navbar2 />
   <Switch>
    <div class='flex-grow mb-20'>
     <Route exact path='/' component={Slider} />
     <Route path='/productos' component={Productos} />
     <Route path='/contacto' component={Contacto} />
     <Route path='/aranceles'>
      <Aranceles pdf={aranceles} />
     </Route>

     {/* <Slider /> */}
     {/* <Download /> */}
    </div>
   </Switch>
   <Footer />
  </div>
 );
}

export default App;
