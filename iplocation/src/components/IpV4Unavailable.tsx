import Typewriter from "typewriter-effect";

/* render unavailable if not found */
export function IpV4Unavailable(): JSX.Element {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.pauseFor(5000).typeString(`IPv4: N/A`).start();
      }}
    />
  );
}
