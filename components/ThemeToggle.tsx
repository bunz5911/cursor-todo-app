"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 초기 테마 상태 설정 (사용자 브라우저 기본 설정 확인)
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    setIsDarkMode(newMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn"
      style={{ backgroundColor: isDarkMode ? '#f59e0b' : '#6366f1' }}
    >
      {isDarkMode ? "라이트 모드" : "다크 모드"}
    </button>
  );
} 