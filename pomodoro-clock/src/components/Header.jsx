export function Header() {
  const headerStyle = {
    margin: "1.25rem 0",
    transform: "translateZ(0)",
  };

  const h1Style = {
    fontSize: "2.25rem",
    lineHeight: "2.5rem",
    textAlign: "center",
  };

  return (
    <header aria-labelledby="page-title" style={headerStyle}>
      <h1 id="page-title" style={h1Style}>
        Pomodoro Clock
      </h1>
    </header>
  );
}
