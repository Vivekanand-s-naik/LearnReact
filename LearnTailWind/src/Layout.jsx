import { useState, useEffect, useCallback } from "react";
import { Header, Footer } from "./compoments/index";
import { Outlet } from "react-router-dom";

function Layout() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const toggleTheme = useCallback(() => {
    setDarkMode((prev) => !prev);
  }, []);
  return (
    <main
      className={`scroll-smooth relative bg-amber-50 font-black text-black dark:bg-primary-blue dark:text-amber-50 min-h-screen min-w-75 transition-colors`}
    >
      <div className="grid grid-rows-[4fr,1fr]">
        <Header />
        <Outlet />
        <Footer />
      </div>

      <button
        onClick={toggleTheme}
        className="translate-transform p-5 fixed bottom-1.5 right-1.5 h-12 w-12 rounded-full bg-primary-blue dark:bg-amber-50 hover:scale-110 hover:rotate-12 flex justify-center items-center"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    </main>
  );
}

export default Layout;
