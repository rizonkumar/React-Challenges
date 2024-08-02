import React, { useEffect, useState, useCallback } from "react";
import { List } from "./List";
import "./Todo.css";

export const Todo = () => {
  const [task, setTask] = useState();
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos") || [])
  );

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
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const deleteToDo = useCallback((id) => {
    setTodos((prevTodos) => {
      const filteredToDo = prevTodos.filter((todo) => {
        return todo.id !== id;
      });
      return filteredToDo;
    });
  }, []);

  const completeTodo = useCallback((id) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      return newTodos;
    });
  }, []);

  const updateToDo = useCallback((id, updatedVal) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((todo) => {
        if (id === todo.id) {
          return { ...todo, value: updatedVal };
        } else {
          return todo;
        }
      });
      return newTodos;
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Enter a new task"
        />
        <button onClick={addTodo}>Add Task</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <List
            key={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            deleteToDo={deleteToDo}
            updateToDo={updateToDo}
          />
        ))}
      </ul>
    </div>
  );
};