import {useState, useEffect} from 'react';
import axios from 'axios';


const Pokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response => {setPokemons(response.data.results)})
    },[]);

    const handleShow = (e) =>{
        if(!show){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    return(
        <div>
            <button onClick={handleShow}>Fetch All Pokemon</button>
            {
                show ?
                pokemons.map((pokemon, index ) => {
                    return(<div key = {index}>{pokemon.name}</div>)
                }) : ""
            }
        </div>
    )
}
export default Pokemon;