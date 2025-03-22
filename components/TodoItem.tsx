"use client";

import { ITodo } from "../types";

interface ITodoItemProps {
  todo: ITodo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: ITodoItemProps) {
  return (
    <div className="todo-item">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="checkbox"
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={`text-lg ${todo.completed ? "completed" : ""}`}
        >
          {todo.text}
        </label>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        aria-label="삭제"
        className="btn btn-danger"
      >
        삭제
      </button>
    </div>
  );
} 