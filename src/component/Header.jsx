import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <nav style={styles.nav}>
      <h2>🏆 Sportify Arena</h2>

      <div style={styles.links}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Login</a>
        <a href="#">Register</a>
        <ThemeToggle />
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    background: "var(--card)"
  },
  links: {
    display: "flex",
    gap: "15px",
    alignItems: "center"
  }
};
