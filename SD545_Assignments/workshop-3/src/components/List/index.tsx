import Item from "../Item";

import './index.css';
import Todo from '../../types';

type Props = {
  todos: Todo[];
  onUpdateTodo: (id: string) => void;
  onDeleteTodoById: (id: string) => void;
};
export default function List(props: Props) {
  const { todos, onUpdateTodo, onDeleteTodoById } = props;
  return (
    <ul className="todo-main">
      {todos.map(todo => <Item key={todo.id} {...todo}
        onUpdateTodo={onUpdateTodo}
        onDeleteTodoById={onDeleteTodoById} />)}
    </ul>
  );
}