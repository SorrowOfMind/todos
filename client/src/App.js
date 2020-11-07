import './App.css';
import CreateTodo from './components/CreateTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <div className="container">
      <CreateTodo />
      <ListTodos />
    </div>
  );
}

export default App;
