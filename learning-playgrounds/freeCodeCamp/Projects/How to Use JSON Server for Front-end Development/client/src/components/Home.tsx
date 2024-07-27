import useFetch from "../hooks/useFetch";
import "./Home.css";
import UserList from "./UserList";

const Home = (): JSX.Element => {
  const {
    data: users,
    isPending,
    error,
  } = useFetch("http://localhost:3001/users");

  return (
    <section className="home-container">
      {error && <p>{error}</p>}
      {isPending && <p>Loading users...</p>}
      {users && <UserList users={users} />}
    </section>
  );
};

export default Home;
