import axios from "axios";

import { useEffect, useState } from "react";
/**
 * Create an instance which lets us specify information such as the URL and possibly headers.
 */
const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

function App() {
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  /**
   * GET with Axios
   * You can use GET requests to get data from an endpoint and
   * it'll happen as soon as the app renders thanks to the useEffect() hook.
   */
  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await client.get("?_limit=10");
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);
  /**
   * POST with Axios
   * This takes an object to send the data in and also adds the data to the state by
   * spreading the previous data and then adding the new data:
   * @param {*} title
   * @param {*} body
   */
  const addPosts = async (title, body) => {
    let response = await client.post("", {
      title: title,
      body: body,
    });
    setPosts([response.data, ...posts]);
    setTitle("");
    setBody("");
  };

  /**
   * DELETE with Axios
   * We delete it from the UI after we delete it from the endpoint/API by using the filter method
   * to return an array that does not contain that element.
   * @param {*} id
   */
  const deletePost = async (id) => {
    await client.delete(`${id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };
  /**
   * Because we are querying for an array of ten posts,
   * we will have to loop through this state to get these ten posts into our application.
   */

	return (
		<div className="app">
			<nav>
				<h1>POSTS APP</h1>
			</nav>
			<div className="add-post-container">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						className="form-control"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<textarea
						name=""
						className="form-control"
						id=""
						cols="10"
						rows="8"
						value={body}
						onChange={(e) => setBody(e.target.value)}
					></textarea>
					<button type="submit">Add Post</button>
				</form>
			</div>
			<div className="posts-container">
				<h2>All Posts 📫</h2>
				{posts.map((post) => {
					return (
						<div className="post-card" key={post.id}>
							<h2 className="post-title">{post.title}</h2>
							<p className="post-body">{post.body}</p>
							<div className="button">
								<div className="delete-btn" onClick={() => deletePost(post.id)}>
									Delete
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};


export default App;
