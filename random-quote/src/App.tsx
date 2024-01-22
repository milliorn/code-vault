import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Author from "./components/Author";
import Footer from "./components/Footer";
import NewQuote from "./components/NewQuote";
import QuoteText from "./components/QuoteText";
import TwitterButton from "./components/TwitterButton";
import "./css/App.css";
/**
 * Where we get our data.
 */
const apiUrl = "http://quotes.stormconsultancy.co.uk/random.json" as string;

function App(): JSX.Element {
  /**
   * The State Hook below will allow the use of state in the function component
   * without writing a separate class component.
   * userData is an object that is initially empty (useState({})).
   * Once the data is fetched from the network,
   * it will contain the user data.
   * setUserData is equivalent to writing this.setState()
   * to update the component state with the value of userData.
   */
  const [userData, setUserData]: any = useState({});
  /** Fetch and handle our json */
  async function getApiUrlAxios(): Promise<void> {
    const response: AxiosResponse<string | number, string | number> =
      await axios.get(apiUrl);
    setUserData(response.data);
  }
  /**
   * Effect Hook will allow you to perform side effect operations such as fetching data,
   * clean up, or DOM manipulation.
   * useEffect() takes as argument a function that will execute after the first render
   * and after every component update.
   * This function job is to get the user data from API and update the component.
   * Passing a second argument to useEffect is optional.
   * Passing an empty array [] ensures this effect will run just once;
   * otherwise, it will run after every render.
   */
  useEffect(() => {
    getApiUrlAxios();
  }, []);

  /**
   * preventDefault is used here to stop spam request.
   */
  function handleGetNewQuote(e: any): void {
    e.preventDefault();
    getApiUrlAxios();
  }

  const styles = {
    backgroundBlendMode: "multiply",
    backgroundColor: `#fff`,
    borderRadius: "1.5rem",
    borderWidth: "1px",
    display: "flexbox",
    margin: "1px auto auto auto",
    opacity: 0.9,
    padding: "2.5rem 3rem",
    position: "relative",
  } as const;

  return (
    <div id="wrapper">
      <div id="quote-box" style={styles}>
        <QuoteText quote={userData.quote} />
        <Author author={userData.author} />
        <NewQuote handleGetNewQuote={handleGetNewQuote} />
        <TwitterButton userData={userData} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
