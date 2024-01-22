import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import PropTypes from "prop-types";
/**
 * Insert quotes before and after text
 * @param {*} props
 * @returns
 */
export default function Quote(props: { quote: string }): JSX.Element {
  const styles = {
    height: "auto",
    lineHeight: 2.5,
    textAlign: "left",
    width: "24rem",
  } as const;

  return (
    <span id="text" style={styles}>
      <ImQuotesLeft /> {props.quote} <ImQuotesRight />
    </span>
  );
}

Quote.propTypes = {
  quote: PropTypes.string,
};

Quote.defaultProps = {
  quote: "quote",
};
