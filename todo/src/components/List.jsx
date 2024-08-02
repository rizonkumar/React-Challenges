import React, { useState } from "react";

export const List = ({ todo, completeTodo, deleteToDo }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [updateVal, isUpdateVal] = useState(todo.value);
  return (
    <div>
      <div key={todo.id}>
        {todo.isCompleted ? (
          <span style={{ textDecoration: "line-through" }}>{todo.value}</span>
        ) : isEdit ? (
          <input />
        ) : (
          <span>{todo.value}</span>
        )}
        <span onClick={() => completeTodo(todo.id)}>✅</span>
        <span onClick={() => deleteToDo(todo.id)}>❌</span>
        {!isEdit && <span onClick={() => setIsEdit(true)}>✏️</span>}
      </div>
    </div>
  );
};
