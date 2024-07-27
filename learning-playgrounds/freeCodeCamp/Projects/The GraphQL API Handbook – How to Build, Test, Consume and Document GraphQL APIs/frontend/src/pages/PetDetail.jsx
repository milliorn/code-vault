/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import axios from "axios";

import { useQuery, useMutation } from "@apollo/client";
import { GET_PET } from "../api/queries";
import { DELETE_PET } from "../api/mutations";

function PetDetail({ setPetToEdit }) {
  const [pet, setPet] = useState([]);

  const { petId } = useParams();

  const { loading, error, data } = useQuery(GET_PET, {
    variables: { petId },
  });

  useEffect(() => {
    if (data && data?.pet) setPetToEdit(data?.pet);
  }, [data]);

  const [
    deletePet,
    { loading: deleteLoading, error: deleteError, data: deleteData },
  ] = useMutation(DELETE_PET, {
    variables: { deletePetId: petId },
  });

  useEffect(() => {
    if (deleteData && deleteData?.deletePet) window.location.href = "/";
  }, [deleteData]);

  const getPet = async () => {
    try {
      /* FETCH */
      // const response = await fetch(`http://localhost:3000/pets/${petId}`)
      // const data = await response.json()
      // if (response.status === 200) {
      //     setPet(data)
      //     setPetToEdit(data)
      // }

      /* AXIOS */
      const response = await axios.get(`http://localhost:3000/pets/${petId}`);
      if (response.status === 200) {
        setPet(response.data);
        setPetToEdit(response.data);
      }
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    getPet();
  }, []);

  const deletePetRest = async () => {
    try {
      /* FETCH */
      // const response = await fetch(`http://localhost:3000/pets/${petId}`, {
      //     method: 'DELETE'
      // })

      /* AXIOS */
      const response = await axios.delete(
        `http://localhost:3000/pets/${petId}`
      );

      if (response.status === 200) window.location.href = "/";
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        aligniItems: "center",
      }}
    >
      <h2>Pet Detail</h2>

      <Link to="/">
        <button>Back to list</button>
      </Link>

      {(loading || deleteLoading) && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}
      {deleteError && <p>deleteError: {deleteError.message}</p>}

      {data?.pet && (
        <>
          <p>Pet name: {data?.pet?.name}</p>
          <p>Pet type: {data?.pet?.type}</p>
          <p>Pet age: {data?.pet?.age}</p>
          <p>Pet breed: {data?.pet?.breed}</p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              aligniItems: "center",
            }}
          >
            <Link to={`/${data?.pet?.id}/edit`}>
              <button style={{ marginRight: 10 }}>Edit pet</button>
            </Link>

            <button style={{ marginLeft: 10 }} onClick={() => deletePet()}>
              Delete pet
            </button>
          </div>
        </>
      )}

      {pet && (
        <>
          <p>Pet name: {pet.name}</p>
          <p>Pet type: {pet.type}</p>
          <p>Pet age: {pet.age}</p>
          <p>Pet breed: {pet.breed}</p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              aligniItems: "center",
            }}
          >
            <Link to={`/${pet?.id}/edit`}>
              <button style={{ marginRight: 10 }}>Edit pet</button>
            </Link>

            <button style={{ marginLeft: 10 }} onClick={() => deletePetRest()}>
              Delete pet
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PetDetail;
