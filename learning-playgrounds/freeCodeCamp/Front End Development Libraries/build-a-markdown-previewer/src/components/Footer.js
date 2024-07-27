// main app footer
export function Footer(props) {
  const { currentYear } = props;

  return (
    <footer className="flex justify-center text-sky-50">
      <p className="my-8">
        &copy; {currentYear}{" "}
        <a
          href="https://github.com/milliorn"
          alt="github"
          target="_blank"
          rel="noreferrer"
          aria-label="link to source code on Github"
        >
          Scott Milliorn
        </a>
      </p>
    </footer>
  );
}
