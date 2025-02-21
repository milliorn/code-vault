// main app footer
export function Footer(props) {
  const { currentYear } = props;

  return (
    <footer className="flex justify-center text-sky-50">
      <p className="my-8">
        &copy; {currentYear}{" "}
        <a
          href="https://github.com/milliorn"
          alt="Created by Scott Milliorn, Github"
          target="_blank"
          rel="noreferrer"
          aria-label="Created by Scott Milliorn, Github"
        >
          Created by Scott Milliorn - Github
        </a>
      </p>
    </footer>
  );
}
