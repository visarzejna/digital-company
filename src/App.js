import Header from './Components/Header/Header';
import About from './Components/About/About';
import Events  from './Components/Events/Events';
import Work from './Components/Work/Work';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Events />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
