import './App.css';
import Changes from './components/Changes';



function App() {


  return (
    <div className="App">
      <div className="App-body">
        <h1>Create your own terrarium design</h1>
        <h3>Preview</h3>
        <div className='prew'></div>
        <Changes />


      </div>
    </div>
  );
}

export default App;
