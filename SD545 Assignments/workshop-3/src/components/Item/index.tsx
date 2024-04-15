import './index.css';
import Todo from '../../types';

type Props = {
  id: string,
  name: string,
  done: boolean;
  onUpdateTodo: (id: string) => void;
  onDeleteTodoById: (id: string) => void;
};

export default function Item(props: Props) {
  const { id, name, done, onUpdateTodo, onDeleteTodoById } = props;

  const changeCheckBox = () => {
    onUpdateTodo(id);
  };

  const deleteItem = () => {
    if (window.confirm("Are you sure?"))
      onDeleteTodoById(id);
  };
  return (
    <li>
      <label>
        <input type="checkbox" onChange={changeCheckBox} checked={done} />
        <span>{name}</span>
      </label>
      <button className="btn btn-danger" style={{ display: 'none' }} onClick={deleteItem}>Delete</button>
    </li>
  );
}