
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import TopHeader from './components/TopHeader/TopHeader';

function App() {
  return (
    <div>
      <TopHeader></TopHeader>
      <Header/>
      {/* <Nav/> */}
      <About/>
      <Experience/> 
      {/* <Services/> */}
      <Portfolio/>
      {/* <Testimonial/> */}
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
