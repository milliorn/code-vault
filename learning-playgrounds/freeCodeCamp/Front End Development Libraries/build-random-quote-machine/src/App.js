import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";

import "./App.css";

const apiUrl = "https://api.quotable.io/random";

/**
 *
 * Main Component
 */
const App = () => {
  /**
   * The State Hook below will allow the use of state in the function component
   * without writing a separate class component.
   * userData is an object that is initially empty (useState({})).
   * Once the data is fetched from the network,
   * it will contain the user data.
   * setUserData is equivalent to writing this.setState()
   * to update the component state with the value of userData.
   */
  const [userData, setUserData] = useState({});

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
   * Fetch and handle our json
   */
  const getApiUrlAxios = async () => {
    const response = await axios.get(apiUrl);
    setUserData(response.data);
  };

  /**
   * preventDefault is used here to stop spammy request.
   */
  const getNewQuote = (e) => {
    e.preventDefault();
    getApiUrlAxios();
  };

  return (
    <div id="wrapper">
      <div id="quote-box">
        <div id="quote-text">
          <span id="text">
            <ImQuotesLeft /> {userData.content || "Quote"} <ImQuotesRight />
          </span>
        </div>

        <div id="quote-author">
          - <span id="author">{userData.author || "Author"}</span>
        </div>

        <button class="button" id="new-quote" onClick={getNewQuote}>
          new quote
        </button>

        <button class="button" title="Tweet this quote!" target="_top">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${userData.content}- ${userData.author}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </a>
        </button>
      </div>

      <footer>
        source code @{" "}
        <a href="https://github.com/milliorn" target="_blank" rel="noreferrer">
          github
        </a>
      </footer>
    </div>
  );
};

export default App;
