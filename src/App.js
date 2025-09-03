import './App.css';
import Quiz from './Quiz';
import logo from './logo.jpeg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Watoto na Codi Logo" className="logo" />
        <div className="header-text">
          <h1>Watoto na Codi</h1>
          <p>Interactive Quiz for Cognitive Development</p>
        </div>
      </header>
      <main>
        <Quiz />
      </main>
    </div>
  );
}

export default App;
