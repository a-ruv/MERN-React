import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [resource, setResource] = useState();
    const [selectedId, setSelectedId] = useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(resource);
        console.log(selectedId);
        navigate(`/${resource}/${selectedId}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Search for: </label>
                <select onChange={(e) => setResource(e.target.value)}>
                    <option value="">Choose an option</option>
                    <option value="people">People</option>
                    <option value="planet">Planet</option>
                </select>
                <label>ID: </label>
                <input type="number" onChange={(e) => setSelectedId(e.target.value)} />
                <button>Search</button>
            </form>
        </div>
    );
};
export default Search;
