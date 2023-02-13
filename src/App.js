
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import DaysIcode from './components/DaysIcode/DaysIcode';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import TopHeader from './components/TopHeader/TopHeader';


function App() {
  return (
    <div>
      <TopHeader></TopHeader>
      <Header/>
      <About/>
      <Experience/> 
      <Portfolio/>
      {/* <Testimonial/> */}
      <DaysIcode></DaysIcode>
      <Contact/>
      <Footer/>
  
    </div>
  );
}

export default App;
