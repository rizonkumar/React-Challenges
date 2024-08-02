import React, { useState } from "react";

export const List = ({ todo, completeTodo, deleteToDo, updateToDo }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [updatedVal, setUpdatedVal] = useState(todo.value);

  const handleUpdate = () => {
    updateToDo(todo.id, updatedVal);
    setIsEdit(false);
  };

  return (
    <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      {isEdit ? (
        <input
          className="edit-input"
          value={updatedVal}
          type="text"
          onChange={(e) => setUpdatedVal(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleUpdate();
            }
          }}
          onBlur={handleUpdate}
          autoFocus
        />
      ) : (
        <span className="todo-text">{todo.value}</span>
      )}
      <div className="todo-actions">
        <span onClick={() => completeTodo(todo.id)}>✅</span>
        {!todo.isCompleted && !isEdit && <span onClick={() => setIsEdit(true)}>✏️</span>}
        <span onClick={() => deleteToDo(todo.id)}>❌</span>
      </div>
    </li>
  );
};