import PropTypes from "prop-types";
import Quote from "./Quote";
/**
 * Get the quoted text
 * @param {*} props
 * @returns
 */
export default function QuoteText(props: { quote: string }): JSX.Element {
  const styles = {
    clear: "both",
    fontSize: "large",
    fontStyle: "italic",
    fontWeight: "500",
    letterSpacing: "0.1em",
    overflowWrap: "break-word",
    textAlign: "center",
    width: "24rem",
  } as const;

  return (
    <div id="quote-text" style={styles}>
      <Quote quote={props.quote} />
    </div>
  );
}

QuoteText.propTypes = {
  quote: PropTypes.string,
};

QuoteText.defaultProps = {
  quote: "quote",
};
