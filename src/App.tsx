
import { useState} from 'react'
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';


import './App.css';
const DUMMY_DATA = [
    new Todo('learn react 11111111'),
    new Todo('learn typescript bbbb'),
  ];


function App() {
   const [todos, setTodos] = useState<Todo[]>(DUMMY_DATA);
  
  

  const onAddTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => { return prevTodos.concat(newTodo)});
  };

  const removeTodoHandler = (id: string ) => {
    setTodos((prevTodos) => {return prevTodos.filter(item => item.id !== id)})
  }
  return (
    <div>
      <NewTodo onAddTodo={onAddTodoHandler}  />
      <Todos items={todos} removeTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
