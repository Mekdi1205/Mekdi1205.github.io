import React from 'react';

import './index.css';
import Todo from '../../types';

type Props = {
  todos: Todo[];
  onDeleteFinishedTask: () => void;
};
export default function Footer(props: Props) {

  const { todos, onDeleteFinishedTask } = props;

  const changeCheckBox = () => {

  };
  const finishedTaskCount = todos.filter(todo => todo.done).length;

  return (
    <div className="todo-footer">
      <label>
        <input type="checkbox"
          checked={finishedTaskCount === todos.length && todos.length !== 0}
          onChange={changeCheckBox} />
      </label>
      <span>
        <span>Finished {todos.filter(todo => todo.done).length}</span> / total {todos.length}
      </span>
      <button className="btn btn-danger">Delete Finished Tasks</button>
    </div>
  );
}
