import { h } from "preact";

// Container
function Container(): h.JSX.Element {
  return (
    <div className="container">
      <div className="image-container">
        <img src="../../assets/profile.webp" alt="Scott Milliorn" />
      </div>
    </div>
  );
}

export default Container;
