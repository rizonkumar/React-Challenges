import React, { useState } from "react";

export const List = ({ todo, completeTodo, deleteToDo, updateToDo }) => {

  const [isEdit, setIsEdit] = useState(false);
  const [updatedVal, setUpdatedVal] = useState(todo.value);

  const handleUpdate = () => {
    updateToDo(todo.id, updatedVal);
    setIsEdit(false);
  };
  
  return (
    <>
      <div key={todo.id}>
        {todo.isCompleted ? (
          <span style={{ textDecoration: "line-through" }}>{todo.value}</span>
        ) : isEdit ? (
          <input
            value={updatedVal}
            type="text"
            onChange={(e) => setUpdatedVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleUpdate();
              }
            }}
            onBlur={handleUpdate}
          />
        ) : (
          <span>{todo.value}</span>
        )}
        <span onClick={() => completeTodo(todo.id)}>✅</span>
        {!todo.isCompleted && !isEdit && <span onClick={() => setIsEdit(true)}>✏️</span>}
        <span onClick={() => deleteToDo(todo.id)}>❌</span>
      </div>
    </>
  );
};
