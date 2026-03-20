import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full shadow-md border bg-white dark:bg-black dark:text-white dark:border-gray-700 transition-transform hover:scale-110"
        aria-label="Cambiar tema"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </div>
  );
}

export default ThemeToggle;
