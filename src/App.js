import './App.css';
import santaClaus from './sauta-claus-jonathan-borba.gif';
import Desired from "./components/Desired"
import Background from "./components/Background"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Background/>
                <h1>Dear Father Christmas</h1>
                <img src={santaClaus} className="santa" alt="santaClaus"/>


                <Desired/>
            </header>
        </div>
    );
}

export default App;
