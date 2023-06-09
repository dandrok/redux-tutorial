import './App.css';
import { ReactCounter } from './components/ReactCounter';
import { ReactTodo } from './components/ReactTodo';
import { RedCounter } from './features/counter/RedCounter';
import { ReduxCounter } from './features/counter/ReduxCounter';
import { ReduxTodo } from './features/todo/ReduxTodo';

function App() {
  return (
    <div className="App">
      {/* <ReactTodo /> */}
      {/* <ReduxTodo/> */}
      {/* <ReactCounter/> */}
      <ReduxCounter/>
      <RedCounter/>
    </div>
  );
}

export default App;
