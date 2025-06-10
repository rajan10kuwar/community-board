import './App.css';
import Card from './components/Card';
import resources from './data/resources';

function App() {
  return (
    <div className="app">
      <header>
        <h1>Software Engineering Resource Board</h1>
        <p>Explore tutorials, tools, and communities to level up your coding skills!</p>
      </header>
      <div className="card-grid">
        {resources.map((resource, index) => (
          <Card
            key={index}
            title={resource.title}
            description={resource.description}
            link={resource.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;