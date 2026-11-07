"use client";

import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const isCurrentlyDark = root.classList.contains("dark");
    const nextState = !isCurrentlyDark;

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
      {/* Light mode mein Moon dikhega, dark mode mein chup jayega */}
      <span className="inline dark:hidden text-base">🌙</span>
      
      {/* Dark mode mein Sun dikhega, light mode mein chup jayega */}
      <span className="hidden dark:inline text-base">☀️</span>
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}