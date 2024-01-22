import axios, { AxiosInstance, AxiosResponse } from "axios";
import { SetStateAction, useEffect, useState } from "react";
import "./css/styles.css";
import { GeoInformation } from "./components/GeoInformation";
import { GeoUnavailable } from "./components/GeoUnavailable";
import { endpointGeo, retryAxios } from "./util/retryAxios";

retryAxios();

/* main app */
export default function App() {
  const [err, setError] = useState(null);
  const [geo, setGeo] = useState(null);
  const [ipAddress, setipAddress] = useState(null);

  const endpointIP: AxiosInstance = axios.create({
    baseURL: "https://api.ipify.org",
  });

  /* GET request */
  async function getIp(): Promise<void> {
    const response: AxiosResponse<null, null> = await endpointIP.get("/");
    setipAddress(response.data as SetStateAction<null>);
  }

  /* get response from url and set state from it if geo is available */
  async function getGeo(): Promise<void> {
    const response = await endpointGeo.get("/json");
    setGeo(response.data);
  }

  useEffect(() => {
    try {
      getIp();
      getGeo();
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log("error message: ", e.message);
      } else {
        console.log("unexpected error: ", err);
      }
      setError(e as SetStateAction<null>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return geo ? (
    <GeoInformation ipAddress={ipAddress} geo={geo} />
  ) : (
    <GeoUnavailable />
  );
}
