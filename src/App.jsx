import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Software Engineering Resource Board</h1>
        <p>Explore tutorials, tools, and communities to level up your coding skills!</p>
      </header>
      <div className="card-grid">
        <Card
          title="freeCodeCamp"
          description="Learn to code for free with interactive tutorials."
          link="https://www.freecodecamp.org/"
        />
      </div>
    </div>
  );
}

export default App;