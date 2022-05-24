import logo from './logo.svg';
import './App.css';
import Hexagon from './Hexagon';

function App() {
  return (
    <div className="App">

      <div className='main'>
        <div className='animation'>
          <Hexagon id="center"/>
          <Hexagon id="left"/>
          <Hexagon id="right"/>
          <Hexagon id="top"/>
          <Hexagon id="bottom"/>
          <Hexagon id="leftTop"/>
        </div>
      </div>

    </div>
  );
}

export default App;
