import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  /* create state to store data */
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const endpoint = "https://jsonplaceholder.typicode.com/posts?_limit=10";

  /* GET request with Fetch api */
  useEffect(() => {
    const fetchPost = async () => {
      /* The fetch request yields a promise*/
      const response = await fetch(endpoint);
      /* Resolve promise */
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };
    fetchPost();
  }, []);

  /* POST method to send data from an endpoint. */
  const addPosts = async (title, body) => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          /*
          The body holds the data we want to pass into the API,
          which we must first stringify because we are sending data to a web server
        */
          title: title,
          body: body,
          userId: Math.random().toString(36).slice(2),
        }),
        headers: {
          /*
          The header tells us the type of data,
          which is always the same when consuming REST API's.
        */
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      /* Set the state to hold the new data and distribute the remaining data into the array. */
      let data = await response.json();
      setPosts((posts) => [data, ...posts]);
      setTitle("");
      setBody("");
    } catch (error) {
      console.log(error);
    }
  };

  /*
    DELETE method to remove data from an endpoint.
    This gets triggered when the button is clicked, and we get the id of the specific post in which the button was clicked.
  */
  const deletePost = async (id) => {
    try {
      let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.status === 200) {
        setPosts(posts.filter((post) => post.id !== id));
      } else {
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="add-post-container">
          {posts.map((post) => {
            return (
              <div className="post-card" key={post.id}>
                <div className="button">
                  <div
                    className="delete-btn"
                    onClick={() => deletePost(post.id)}
                  >
                    <span>userId: </span>
                    {post.userId}
                    <br />
                    <span>id: </span>
                    {post.id}
                    <br />
                    <span>title: </span>
                    {post.title}
                    <br />
                    <span>body: </span>
                    {post.body}
                    <br />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
