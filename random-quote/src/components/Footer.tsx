/**
 * Footer component
 * @returns
 */
export default function Footer(): JSX.Element {
  const styles = {
    color: `#95ace1`,
    textDecoration: "none",
  } as const;

  const footerStyles = {
    color: "#fff",
    display: "block",
    margin: "1rem auto 2rem auto",
    textAlign: "center",
  } as const;

  const github = "https://github.com/milliorn" as string;

  return (
    <footer style={footerStyles}>
      source code @{" "}
      <a style={styles} href={github} target="_blank" rel="noreferrer" aria-label="github">
        github
      </a>
    </footer>
  );
}
