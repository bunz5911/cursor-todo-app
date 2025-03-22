export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export interface IStoredTodo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
} 