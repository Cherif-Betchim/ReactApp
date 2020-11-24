import santaClaus from './sauta-claus-jonathan-borba.jpg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Dear Father Christmas</h1>
                <img src={santaClaus} className="santa" alt="santaClaus"/>
                <p>Here's our group wish list !</p>
            </header>
        </div>
    );
}

export default App;
