import PropTypes from "prop-types";
/**
 * Get the author of the quote
 * @param {*} props
 * @returns
 */
export default function Author(props: { author: string }): JSX.Element {
  const styles = {
    fontSize: `1.5rem`,
    height: "auto",
    lineHeight: 2.5,
    paddingTop: "1.5rem",
    textAlign: "right",
    width: "24rem",
  } as const;

  const quoteStyles = {
    clear: "both",
    fontSize: "1.25rem",
    height: "auto",
    lineHeight: "1.75rem",
    paddingTop: "1.25rem",
    textAlign: "right",
    width: "24rem",
  } as const;

  return (
    <div id="quote-author" style={quoteStyles}>
      <span id="author" style={styles}>
        - {props.author}
      </span>
    </div>
  );
}

Author.propTypes = {
  author: PropTypes.string,
};

Author.defaultProps = {
  author: "author",
};
