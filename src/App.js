
import './App.css';
import Hero from "./components/Home";
import Demo from "./components/Demo";

function App() {
  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  );
}

export default App;
