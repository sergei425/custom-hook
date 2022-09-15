import useJsonFetch from './hooks/useJsonFetch';
import './App.css';

function App() {
  const {data} = useJsonFetch('http://localhost:7070/', 'data')
  const {error} = useJsonFetch('http://localhost:7070/', 'error')
  const {loading} = useJsonFetch('http://localhost:7070/', 'loading')
  return (
    <div className="App">
      hi
    </div>
  );
}

export default App;
