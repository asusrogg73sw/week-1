"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check current state on mount
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextState = !isDark;
    
    setIsDark(nextState);
    root.classList.toggle("dark", nextState);
    localStorage.setItem("theme", nextState ? "dark" : "light");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full h-10 w-10 border-border bg-background hover:bg-primary/10 hover:text-primary transition-all duration-300"
    >
      {isDark ? "☀️" : "🌙"}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}