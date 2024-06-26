
import Header from './components/Header';
import Footer from './components/Footer';
import List from './components/List';
import Todo from './types';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addNewTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: string) => {
    const newTodos = todos.map(todo => todo.id === id ? ({ ...todo, done: !todo.done }) : todo);
    setTodos(newTodos);
  };

  const deleteTodoById = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const deleteFinishedTask = () => {
    setTodos(todos.filter(todo => !todo.done));
  };
  useEffect(() => {
    async function getList() {
      try {
        const response = await fetch('http://localhost:9000/todos');
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    }
    getList();
  }, []);
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header onAddNewTodo={addNewTodo} />
        <List todos={todos} onUpdateTodo={updateTodo} onDeleteTodoById={deleteTodoById} />
        <Footer todos={todos} onDeleteFinishedTask={deleteFinishedTask} />
      </div>
    </div>
  );
}

export default App;
