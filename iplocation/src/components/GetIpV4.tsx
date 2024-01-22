import Typewriter from "typewriter-effect";

/* render IpV4 address if found */
export function GetIpV4({ ipAddress }: { ipAddress: string }): JSX.Element {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter.pauseFor(5000).typeString(`IPv4: ${ipAddress}`).start();
      }}
    />
  );
}
