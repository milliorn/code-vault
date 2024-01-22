import uuid from "react-uuid";
import Typewriter from "typewriter-effect";
import { AppLogo } from "./AppLogo";
import { GeoLocationString } from "./GeoLocationString";
import { GetIpV4 } from "./GetIpV4";
import { IpV4Unavailable } from "./IpV4Unavailable";

/* gather all information about client */
export function GeoInformation({
  ipAddress,
  geo,
}: {
  ipAddress: string | null;
  geo: any;
}): JSX.Element {
  const data = [
    { paused: 10000, text: `IPv6: ${geo.ip}` },
    { paused: 18000, text: `ISP: ${geo.org}` },
    {
      paused: 23000,
      text: `Latitude | Longitude: ${geo.latitude} | ${geo.longitude}`,
    },
    {
      paused: 30000,
      text: `Location: ${geo.city}, ${geo.region} ${geo.country_name}`,
    },
  ];

  /* map our components from data */
  function MappedGeo({
    data,
  }: {
    data: { paused: number; text: string }[];
  }): JSX.Element[] {
    const styles = {
      lineHeight: 2,
    } as const;

    return data.map((e) => (
      <div style={styles} key={uuid()}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.pauseFor(e.paused).typeString(e.text).start();
          }}
        />
      </div>
    ));
  }

  const divStyles = {
    backgroundColor: `#282c34`,
    color: `#d7d3cb`,
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
        <GeoLocationString />
        <AppLogo />
        {ipAddress ? <GetIpV4 ipAddress={ipAddress} /> : <IpV4Unavailable />}
        {MappedGeo({ data })}
      </div>
    </div>
  );
}
