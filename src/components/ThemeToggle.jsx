import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggle() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
    try {
      localStorage.setItem("theme", next ? "light" : "dark");
    } catch (e) {}
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-600 hover:bg-slate-800 transition duration-300"
    >
      {isLight ? (
        <FaMoon className="text-slate-700" />
      ) : (
        <FaSun className="text-sky-400" />
      )}
    </button>
  );
}

export default ThemeToggle;