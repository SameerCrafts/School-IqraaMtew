import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import OurPrograms from './components/OurPrograms';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-1">
        <Home />
        <AboutUs />
        <OurPrograms />
        <Gallery />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}

export default App;

