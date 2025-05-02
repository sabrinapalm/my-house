import './App.css';
import { Gallery, CountDown, HouseFacts, HouseMap } from './components';

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <h1>Femte Villavägen 12</h1>
        <p className="subtitle">Tillträde: 1 augusti 2025</p>
      </header>
      <div className="main-columns">
        <div className="content">
          <Gallery />
          <CountDown />
          <HouseFacts />
          <HouseMap />
        </div>
      </div>
    </div>
  );
};

export default App;
