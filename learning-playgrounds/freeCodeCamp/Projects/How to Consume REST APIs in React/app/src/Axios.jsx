import "./App.css";
import axios from "axios";
import logo from "./logo.svg";
import { useState, useEffect } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  const endpoint = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
  });

  // GET with Axios
  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await endpoint.get("?_limit=10");
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  // Delete with Axios
  const deletePost = async (id) => {
    await endpoint.delete(`${id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );
  };

  // Post with Axios
  const addPosts = async (title, body) => {
    let response = await endpoint.post("", {
      title: title,
      body: body,
    });
    setPosts((posts) => [response.data, ...posts]);
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
};

export default App;
