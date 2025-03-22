import { Todo, StoredTodo } from '../types/todo';

export const todoStorage = {
  getTodos: () => {
    try {
      const savedTodos = localStorage.getItem('todos');
      if (savedTodos) {
        const parsedTodos = JSON.parse(savedTodos) as StoredTodo[];
        return parsedTodos.map(todo => ({
          ...todo,
          createdAt: new Date(todo.createdAt)
        }));
      }
    } catch (error) {
      console.error('Error loading todos:', error);
    }
    return [];
  },

  setTodos: (todos: Todo[]) => {
    try {
      localStorage.setItem('todos', JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  }
}; 