import useJsonFetch from './hooks/useJsonFetch';
import './App.css';

function App() {
  useJsonFetch('http://localhost:7070/', 'data')
  useJsonFetch('http://localhost:7070/', 'error')
  useJsonFetch('http://localhost:7070/', 'loading')
  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;
