import {useState, useEffect} from 'react';


const Pokemon = () => {

    const [pokemons, setPokemons] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() =>{
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
        .then(response => response.json())
        .then(response => setPokemons(response.results))
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