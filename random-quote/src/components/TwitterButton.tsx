import PropTypes from "prop-types";
import { FaTwitter } from "react-icons/fa";
/**
 * Twitter
 */
export default function TwitterButton(props: {
  userData: { quote: string; author: string };
}): JSX.Element {
  const styles = {
    color: `#95ace1`,
    textDecoration: "none",
  } as const;

  const buttonStyles = {
    backgroundColor: "#0f172a",
    borderColor: "#95ace1",
    borderRadius: "1.5rem",
    borderWidth: "1px",
    cursor: "pointer",
    float: "left",
    margin: "0.25rem",
    padding: "1rem",
    textAlign: "center",

  } as const;

  const url = `https://twitter.com/intent/tweet?text=${props.userData.quote}- ${props.userData.author}`;

  return (
    <button
      className="button"
      id="tweet-quote"
      style={buttonStyles}
      title="Tweet this quote!"
      type="button"
    >
      <a style={styles} href={url} rel="noopener noreferrer" target="_blank" aria-label="github">
        <FaTwitter />
      </a>
    </button>
  );
}

TwitterButton.propTypes = {
  quote: PropTypes.string,
  author: PropTypes.string,
};

TwitterButton.defaultProps = {
  quote: "quote",
  author: "author",
};
