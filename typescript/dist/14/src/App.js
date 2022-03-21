import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
const App = () => {
    const [todos, setTodos] = useState([]);
    const todoAddHandler = (text) => {
        setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }]);
    };
    const todoDeleteHandler = (todoId) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== todoId);
        });
    };
    return (<div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>);
};
export default App;
