import './App.css';
import Desired from "./components/Desired"
import Background from "./components/Background"

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Background/>
        <Desired/>
      </header>
    </div>
  );
}

export default App;
