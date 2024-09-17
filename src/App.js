import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import Footer from './components/footer';
import Choose from './components/why-choose';
import Counter_animation from './components/counter-animation';


function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <Choose></Choose>
      <Counter_animation></Counter_animation>
      <Footer></Footer>


    </>
  );
}

export default App;
