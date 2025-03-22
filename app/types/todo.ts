export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface StoredTodo {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
} 