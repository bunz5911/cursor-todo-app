interface TodoFormProps {
  input: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function TodoForm({ input, onInputChange, onSubmit }: TodoFormProps) {
  return (
    <form onSubmit={onSubmit} className="flex items-center gap-4">
      <div className="flex-1">
        <input
          type="text"
          value={input}
          onChange={onInputChange}
          className="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-4 w-full
                  bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none
                  focus:border-blue-500 transition-colors text-lg"
          placeholder="할 일을 입력하세요"
        />
      </div>
      <button 
        type="submit" 
        className="bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-600
                transition-colors shadow-md font-medium text-lg whitespace-nowrap"
      >
        추가
      </button>
    </form>
  );
} 