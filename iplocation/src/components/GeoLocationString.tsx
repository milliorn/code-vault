import Typewriter from "typewriter-effect";

/* render text at top of page */
export function GeoLocationString(): JSX.Element {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("Your Geo Location results:").start();
      }}
    />
  );
}
