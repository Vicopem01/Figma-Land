import logo from './logo.svg';
import './App.css';
import Header from "./Header/Header"
import imageTile from "./images/imageTiles.svg"
import Features from './components/Features';
import Content from "./components/content"
import Gallery from "./components/gallery";
import Partners from './components/partners';
import Testimonials from './components/testimonials';
import Flyer from './components/flyer';
import Footer from './components/footer';

const App =()=>{
  return(
    <div>
      <Header />
      <img src={imageTile} alt="image tiles" style={{maxWidth:"100%", height: "auto"}}/>
      <Features />
      <Content />
      <Gallery />
      <Partners />
      <Testimonials />
      <Flyer />
      <Footer />
    </div>
  );
};


export default App;