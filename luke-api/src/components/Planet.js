import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

const Planet = () => {
    const [planet, setPlanet] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${id}`)
            .then((response) => {
                setPlanet(response.data);
                console.log(response.data);
            })
            .catch((err) => {
                navigate("/error");
            });
    }, [id, navigate]);

    return (
        <div>
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>
    );
};
export default Planet;
