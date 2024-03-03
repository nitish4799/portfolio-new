import './App.css';
// import Test from './Test';
import Navbar from './components/navbar/Navbar';
// import Home from './components/Home';



function App() {
  return (
    <>
      {/* <Navbar/>
      <Home/> */}
      <section id='Home'>
        <Navbar/>
      </section>
      <section id='Portfolio'>parallax</section>
      <section>portfolio</section>
      <section id='Contact'>Contact</section>
      {/* <Test/>
      <Test/> */}
    </>
  );
}

export default App;
