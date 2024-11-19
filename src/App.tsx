import CardValue from './sections/CardValue';
import Chronology from './sections/Chronology';
import ConfirmAttendance from './sections/ConfirmAttendance';
import Countdown from './sections/Countdown';
import Details from './sections/Details';
import DressCode from './sections/DressCode';
import Footer from './sections/Footer';
import Home from './sections/Home';

function App() {
  return (
    <div className="App">
      <header className="w-full h-full">
        <div id="home">
          <Home />
        </div>
        <div id="details">
          <Details />
        </div>
        <div id="chronology">
          <Chronology />
        </div>
        <div id="countdown">
          <Countdown />
        </div>
        <div id="dress-code">
          <DressCode />
        </div>
        <div id="cardValue">
          <CardValue />
        </div>
        <div id="confirmAttendance">
          <ConfirmAttendance />
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
