
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Brands from './components/Brands/Brands';
import About from './components/About/About';
import WhyUzofin from './components/WhyUzofin/WhyUzofin';
import Footer from './components/Footer/Footer';
import Support from './components/Support/Support';

function App() {
  return (
    <div className="App">
        <Header />
        <Banner />
        <Brands />
        <About />
        <WhyUzofin />
        <Support />
        <Footer />
    </div>
  );
}

export default App;
