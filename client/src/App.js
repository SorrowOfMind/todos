import './App.css';
import CreateTodo from './components/CreateTodo';
import ListTodos from './components/ListTodos';
import Header from './components/Header';

function App() {
  return (
    <div className="container">
      <Header />
      <CreateTodo />
      <ListTodos />
    </div>
  );
}

export default App;
