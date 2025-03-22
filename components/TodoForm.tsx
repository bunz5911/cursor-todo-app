"use client";

import { useState } from "react";

interface ITodoFormProps {
  onAddTodo: (text: string) => void;
}

export default function TodoForm({ onAddTodo }: ITodoFormProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (text.trim()) {
      onAddTodo(text.trim());
      setText("");
    }
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            type="text"
            placeholder="새로운 할 일을 입력하세요"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="flex justify-between">
          <button 
            type="submit" 
            disabled={!text.trim()}
            className="btn btn-primary"
          >
            추가
          </button>
        </div>
      </form>
    </div>
  );
} 