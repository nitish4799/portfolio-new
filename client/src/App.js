import './App.css';
import Hero from './components/hero/Hero';
// import Test from './Test';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
// import Home from './components/Home';



function App() {
  return (
    <>
      {/* <Navbar/>
      <Home/> */}
      <section id='Home'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='Services'><Parallax type="services"/></section>
      <Portfolio/>
      <section id='Contact'><Contact/></section>
      {/* <Test/>
      <Test/> */}
    </>
  );
}

export default App;
