import Header from './components/Header';
import Section from './components/Section';
import Cronometro from './components/Cronometro';
import Acordion from './components/Acordion';
import Speakers from './components/Speakers';
import Agenda from './components/Agenda';
import Tickets from './components/Tickets';
import Mapa from './components/MapaUbicacion';
import TarjetaUbicacion from './components/TarjetaUbicacion';
import PreguntasFrecuentes from './components/PreguntasFrecuentes';
import Sponsors from './components/Sponsors';
import UxDayFooter from "./components/UxDayFooter";
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Section/>
      <Cronometro/>
      <Acordion/>
      <Speakers/>
      <Agenda/>
      <Tickets/>
      <Mapa/>
      <TarjetaUbicacion/>
      <PreguntasFrecuentes/>
      <Sponsors/>
      <UxDayFooter />      
      <Footer/>
    </>
  );
}

export default App;