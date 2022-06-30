import Header from './Components/Header/Header';
import About from './Components/About/About';
import Events  from './Components/Events/Events';
import Work from './Components/Work/Work';
import Testemonials from './Components/Testemonials/Testemonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Events />
      <Work />
      <Testemonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
