import { Fragment, h } from "preact";
import Container from "./container";
import Header from "./header";
import ShareTileButton from "./svg/ShareTileButton";
import { tileData } from "./tileData";
import { v4 as uuidv4 } from "uuid";

// App Component
function App(): h.JSX.Element {
  // onClick event handler
  async function handleClick(e: MouseEvent): Promise<void> {
    e.preventDefault();
    const currentTarget = e.currentTarget as HTMLElement;
    const link = currentTarget.id;

    try {
      await navigator.clipboard.writeText(link);
      alert(`Link ${link} copied to clipboard`);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Fragment>
      <Header handleClick={handleClick} />
      <Container />
      <h1>@scottmilliorn</h1>
      {tileData.map((tile) => (
        <a
          key={uuidv4()}
          className="tile"
          href={tile.href}
          target="_blank"
          rel="noreferrer"
        >
          <div className="icon">{tile.svg}</div>
          <p>{tile.p}</p>
          <div
            className="tile-share-button"
            id={tile.href}
            onClick={handleClick}
          >
            <ShareTileButton />
          </div>
        </a>
      ))}
    </Fragment>
  );
}

export default App;
