<<<<<<< HEAD
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} style={btnStyle}>
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

const btnStyle = {
  background: "transparent",
  border: "1px solid gray",
  padding: "6px 10px",
  borderRadius: "6px",
  cursor: "pointer"
};
=======
export default function ThemeToggle() {
  const toggleTheme = () => {
    const theme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute(
      "data-theme",
      theme === "dark" ? "light" : "dark"
    );
  };

  return <button onClick={toggleTheme}>🌗</button>;
}
>>>>>>> 15442af9baad8a860fe014023741827372057927
