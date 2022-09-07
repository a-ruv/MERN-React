import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const People = () => {
    const [person, setPerson] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                setPerson(response.data);
            })
            .catch((err) => {
                navigate("/error");
            });
    }, [id, navigate]);

    return (
        <div>
            <h1>{person.name}</h1>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
        </div>
    );
};
export default People;
