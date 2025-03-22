import { Todo } from '../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TodoItem({ todo, onToggleComplete, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-sm">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
        className="w-6 h-6 accent-blue-500 cursor-pointer flex-shrink-0"
      />
      <span 
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} 
        className={`flex-1 text-lg ${todo.completed ? 'text-gray-500 dark:text-gray-400' : ''}`}
      >
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)} 
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600
                transition-colors shadow-sm font-medium flex-shrink-0"
        aria-label="삭제"
      >
        삭제
      </button>
    </li>
  );
} 