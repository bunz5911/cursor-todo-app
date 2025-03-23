"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // 시스템 테마 또는 로컬 스토리지에서 선호하는 테마 가져오기
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
    
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-0 right-0 p-3 rounded-full bg-gray-100 dark:bg-gray-700 
                shadow-md hover:shadow-lg transition-all"
      aria-label="테마 변경"
    >
      {isDarkMode ? 
        <span className="text-xl">🌞</span> : 
        <span className="text-xl">🌙</span>
      }
    </button>
  );
}
