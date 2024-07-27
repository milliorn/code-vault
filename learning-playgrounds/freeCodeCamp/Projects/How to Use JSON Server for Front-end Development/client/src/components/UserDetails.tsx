import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const UserDetails = () => {
  const { id } = useParams();
  const {
    data: user,
    error,
    isPending,
  } = useFetch("http://localhost:3001/users/" + id);

  return (
    <>
      <section>
        {isPending && <p>Loading user details...</p>}

        {error && <p>{error}</p>}

        {user && (
          <>
            <h1>User {id} details</h1>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.number}</p>
          </>
        )}
      </section>
    </>
  );
};

export default UserDetails;
