import Navbar from './Navbar';
import Home from '.Home';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Footer from './Footer';



function App() {
  return (
    <div className="App">
      <Navbar  />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
