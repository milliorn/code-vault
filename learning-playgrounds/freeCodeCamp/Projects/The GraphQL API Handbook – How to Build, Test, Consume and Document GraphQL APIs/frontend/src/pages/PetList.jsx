import axios from "axios";

import { GET_PETS } from "../../api/queries";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useQuery } from "@apollo/client";

function PetList() {
  const [pets, setPets] = useState([]);
  const { loading, error, data } = useQuery(GET_PETS);

  const getPets = async () => {
    try {
      /* FETCH */
      // const response = await fetch('http://localhost:3000/pets')
      // const data = await response.json()
      // if (response.status === 200) setPets(data)

      /* AXIOS */
      const response = await axios.get("http://localhost:3000/pets");
      if (response.status === 200) setPets(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  const getPetsQl = () => {
    fetch("http://localhost:4000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
                query Pets {
                    pets {
                    id
                    name
                    type
                    breed
                    }
                }
                `,
      }),
    })
      .then((response) => response.json())
      .then((data) => setPets(data?.data?.pets))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getPets();
    getPetsQl();
  }, []);

  return (
    <>
      <h2>Pet List</h2>

      <Link to="/add">
        <button>Add new pet</button>
      </Link>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {pets?.map((pet) => {
        return (
          <div key={pet?.id}>
            <p>
              {pet?.name} - {pet?.type} - {pet?.breed}
            </p>

            <Link to={`/${pet?.id}`}>
              <button>Pet detail</button>
            </Link>
          </div>
        );
      })}

      {data?.pets?.map((pet) => {
        return (
          <div key={pet?.id}>
            <p>
              {pet?.name} - {pet?.type} - {pet?.breed}
            </p>

            <Link to={`/${pet?.id}`}>
              <button>Pet detail</button>
            </Link>
          </div>
        );
      })}
    </>
  );
}

export default PetList;
