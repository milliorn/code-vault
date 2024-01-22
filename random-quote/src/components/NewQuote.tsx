import React from "react";
import PropTypes from "prop-types";
/**
 * Get new quote
 * @param {*} props
 * @returns
 */
export default function NewQuote(props: {
  handleGetNewQuote: React.MouseEventHandler<HTMLButtonElement>;
}): JSX.Element {
  const styles = {
    backgroundColor: "#0f172a",
    borderColor: "#95ace1",
    borderRadius: "1.5rem",
    borderWidth: "1px",
    color: "#fff",
    cursor: "pointer",
    float: "inline-start",
    margin: "0.25rem",
    padding: "1rem",
  } as const;

  return (
    <button
      className="button"
      id="new-quote"
      onClick={props.handleGetNewQuote}
      style={styles}
      type="button"
    >
      New Quote
    </button>
  );
}

NewQuote.propTypes = {
  handleGetNewQuote: PropTypes.func,
};
