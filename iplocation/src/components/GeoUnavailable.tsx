import { AppLogo } from "./AppLogo";

/* post component when geo is unavailable */
export function GeoUnavailable(): JSX.Element {
  const divStyles = {
    overflow: "hidden",
    textAlign: "center",
  } as const;

  const styles = {
    alignItems: `center`,
    backgroundColor: `#282c34`,
    color: `#d7d3cb`,
    display: `flex`,
    justifyContent: "center",
    minHeight: `100vh`,
    width: "100%",
  } as const;

  return (
    <div className="App" style={divStyles}>
      <div className="App-header" style={styles}>
        <AppLogo />
      </div>
    </div>
  );
}
