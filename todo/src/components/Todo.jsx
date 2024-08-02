import React, { useEffect, useState } from "react";
import { List } from "./List";

export const Todo = () => {
  const [task, setTask] = useState();
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos') || []));

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTodo = (e) => {
    const newTodos = todos.map((todo) => {
      return { ...todo };
    });
    newTodos.push({
      value: task,
      isCompleted: false,
      id: new Date().getTime(),
    });
    setTodos(newTodos);
    setTask("");
  };

  const handleKeyDown = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const deleteToDo = (id) => {
    const filteredToDo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(filteredToDo);
  };

  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={task}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <div>
        {todos.map((todo, index) => {
          return (
            <List key={todo.id} todo={todo} completeTodo={completeTodo} deleteToDo={deleteToDo} />
          );
        })}
      </div>
    </div>
  );
};
