"use client";

import { useState, useEffect } from "react";
import TodoForm from "../../components/TodoForm";
import TodoItem from "../../components/TodoItem";
import { ITodo } from "../../types";
import todoStorage from "../../utils/todoStorage";
import { ThemeToggle } from "../../components/ThemeToggle";

export default function TodoPage() {
  const [todos, setTodos] = useState<ITodo[]>([]);

  // 초기 할 일 목록 로드
  useEffect(() => {
    const loadedTodos = todoStorage.getAll();
    setTodos(loadedTodos);
  }, []);

  // 새 할 일 추가
  const handleAddTodo = (text: string) => {
    const newTodo = todoStorage.add(text);
    setTodos((prev) => [...prev, newTodo]);
  };

  // 할 일 완료 상태 토글
  const handleToggleTodo = (id: string) => {
    const updatedTodos = todoStorage.toggle(id);
    setTodos(updatedTodos);
  };

  // 할 일 삭제
  const handleDeleteTodo = (id: string) => {
    const updatedTodos = todoStorage.remove(id);
    setTodos(updatedTodos);
  };

  // 완료된 할 일 필터링
  const completedTodos = todos.filter((todo) => todo.completed);
  // 미완료된 할 일 필터링
  const activeTodos = todos.filter((todo) => !todo.completed);

  return (
    <div className="container">
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg font-medium">할 일 목록</h1>
            <p className="text-gray-500">
              오늘의 할 일을 간편하게 관리하세요
            </p>
          </div>
          <ThemeToggle />
        </div>

        <div className="space-y-4">
          <TodoForm onAddTodo={handleAddTodo} />

          {todos.length === 0 ? (
            <div className="text-gray-500" style={{ textAlign: 'center', padding: '1.5rem 0' }}>
              할 일이 없습니다. 새로운 할 일을 추가해보세요!
            </div>
          ) : (
            <>
              {/* 진행 중인 할 일 */}
              <div className="space-y-4">
                <h2 className="text-lg font-medium">진행 중 ({activeTodos.length})</h2>
                <div className="space-y-4">
                  {activeTodos.map((todo) => (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      onToggle={handleToggleTodo}
                      onDelete={handleDeleteTodo}
                    />
                  ))}
                </div>
              </div>

              {/* 완료된 할 일 */}
              {completedTodos.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-lg font-medium">완료됨 ({completedTodos.length})</h2>
                  <div className="space-y-4">
                    {completedTodos.map((todo) => (
                      <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={handleToggleTodo}
                        onDelete={handleDeleteTodo}
                      />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
} 