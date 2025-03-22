"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="absolute top-0 right-0 p-3 rounded-full bg-gray-100 dark:bg-gray-700 
                shadow-md hover:shadow-lg transition-all"
      aria-label="테마 변경"
    >
      {theme === "dark" ? 
        <span className="text-xl">🌞</span> : 
        <span className="text-xl">🌙</span>
      }
    </button>
  );
}
