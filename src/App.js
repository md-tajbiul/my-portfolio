import ScrollToTop from 'react-scroll-to-top';
import './App.css';
import { ReactComponent as Scroll } from './Assets/scroll.svg';
import About from './components/About/About';
import Banner from './components/Banner/Banner';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import Portfolio from './components/Portfolio/Portfolio';
import Social from './components/Social/Social';
function App() {
  return (
    <div>
      <ScrollToTop smooth component={<Scroll/>}/>
      <NavBar />
      <Social />
      <Banner />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
