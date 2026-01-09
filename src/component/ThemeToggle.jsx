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
