import { ITodo, IStoredTodo } from '../types';

// 간단한 UUID 생성 함수
const generateId = (): string => {
  return Date.now().toString() + Math.random().toString(36).substring(2, 9);
};

// 로컬 스토리지에서 Todo 데이터를 관리하는 객체
const todoStorage = {
  // 모든 Todo 불러오기
  getAll: (): ITodo[] => {
    try {
      const todos = localStorage.getItem('todos');
      if (!todos) return [];

      return JSON.parse(todos).map((todo: IStoredTodo) => ({
        ...todo,
        createdAt: new Date(todo.createdAt),
      }));
    } catch (error) {
      console.error('할 일 목록을 불러오는 중 오류가 발생했습니다:', error);
      return [];
    }
  },

  // 새 Todo 추가
  add: (text: string): ITodo => {
    try {
      const todos = todoStorage.getAll();
      const newTodo: ITodo = {
        id: generateId(),
        text,
        completed: false,
        createdAt: new Date(),
      };

      todos.push(newTodo);
      localStorage.setItem(
        'todos',
        JSON.stringify(
          todos.map((todo) => ({
            ...todo,
            createdAt: todo.createdAt.toISOString(),
          }))
        )
      );

      return newTodo;
    } catch (error) {
      console.error('할 일을 추가하는 중 오류가 발생했습니다:', error);
      throw error;
    }
  },

  // Todo 업데이트 (완료 상태 전환)
  toggle: (id: string): ITodo[] => {
    try {
      const todos = todoStorage.getAll();
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      localStorage.setItem(
        'todos',
        JSON.stringify(
          updatedTodos.map((todo) => ({
            ...todo,
            createdAt: todo.createdAt.toISOString(),
          }))
        )
      );

      return updatedTodos;
    } catch (error) {
      console.error('할 일 상태를 변경하는 중 오류가 발생했습니다:', error);
      throw error;
    }
  },

  // Todo 삭제
  remove: (id: string): ITodo[] => {
    try {
      const todos = todoStorage.getAll();
      const filteredTodos = todos.filter((todo) => todo.id !== id);

      localStorage.setItem(
        'todos',
        JSON.stringify(
          filteredTodos.map((todo) => ({
            ...todo,
            createdAt: todo.createdAt.toISOString(),
          }))
        )
      );

      return filteredTodos;
    } catch (error) {
      console.error('할 일을 삭제하는 중 오류가 발생했습니다:', error);
      throw error;
    }
  },
};

export default todoStorage; 