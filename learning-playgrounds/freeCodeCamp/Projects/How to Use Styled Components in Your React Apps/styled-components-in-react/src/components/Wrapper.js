import styled from "styled-components";

const Newcom = ({ className }) => {
  return (
    <div className={className}>
      <h2>Heading 2</h2>
      <button>Click Me!</button>
    </div>
  );
};

export const Wrapper = styled(Newcom)`
  h2 {
    color: green;
    text-align: center;
  }

  button {
    padding: 4px 10px;
    background-color: var(--primary-color);
    border: none;
  }
`;
