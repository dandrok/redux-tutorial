import './App.css';
import { ReactCounter } from './components/ReactCounter';
import { ReduxCounter } from './features/counter/ReduxCounter';

function App() {
  return (
    <div className="App">
      <ReactCounter/>
      <ReduxCounter/>
    </div>
  );
}

export default App;
