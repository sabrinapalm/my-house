import { CountDown } from './components';
import './App.css';

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="main-columns">
        <div className="content">
          <CountDown />
        </div>
      </div>
    </div>
  );
};

export default App;
