import React, {useState, PropsWithChildren} from 'react';

import Todo from '../models/todo';

const DUMMY_DATA = [
    new Todo('learn react 11111111'),
    new Todo('learn typescript bbbb'),
  ];

  type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
  }
  type TodosContextPro ={
     children: React.ReactNode
  }


export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

 const TodosContextProvider: React.FC <TodosContextPro>= (props:TodosContextPro) => {
    
    const [todos, setTodos] = useState<Todo[]>(DUMMY_DATA);
  
    const onAddTodoHandler = (text: string) => {
      const newTodo = new Todo(text);
      setTodos((prevTodos) => { return prevTodos.concat(newTodo)});
    };
  
    const removeTodoHandler = (id: string ) => {
      setTodos((prevTodos) => {return prevTodos.filter(item => item.id !== id)})
    }

    const contextValue : TodosContextObj = {
        items: todos,
        addTodo: onAddTodoHandler,
        removeTodo: removeTodoHandler
    }
    
  return (<TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>);
};

export default TodosContextProvider;

