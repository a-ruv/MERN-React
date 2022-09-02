import { useReducer } from "react";

const  initialState = {
    backgroundColor:"",
    width:"",
    height:"",
    boxes:[]
};

function reducer(state, action) {
    return{
        ...state,
        [action.type]: action.payload
    };
}

const Box = () =>{
    const [state, dispatch] = useReducer(reducer, initialState);

    const {backgroundColor, width, height} = state; 

    const createBox = (e) => {
        e.preventDefault();
        const newBox = { backgroundColor:backgroundColor, width:width, height:height};
        dispatch({
            type: "boxes",
            payload: [...state.boxes, newBox]
        });
        console.log(state.boxes);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    return (
        <div>
            <form onSubmit={ createBox }>
                <div>
                    <label for="color">Color </label>
                    <input type="text" name="backgroundColor" value={state.backgroundColor} onChange={ handleChange }/>                
                    <label for="width">Width </label>
                    <input type="text" name="width" value={state.width} onChange={ handleChange } />
                    <label for="height">Height </label>
                    <input type="text" name="height" value ={state.height} onChange={ handleChange } />
                    <button>Add</button>
                </div>
            </form>
            <div>
                { state.boxes.map( (box, i) =>
                    <div style={{background:box.backgroundColor, width: box.width, height: box.height }}></div>
                )}
            </div>
        </div>
        )
}
export default Box;