import { useReducer, useState } from "react";
import styles from '../components/Todos.module.css'

const initialState = {
    content:"",
    complete: false,
    todos: []
};

function reducer(state, action) {
    return{
        ...state,
        [action.type]: action.payload
    };
}

const Todos = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {content, complete} = state;

    const createTodo = (e) => {
        e.preventDefault();
        const newTodo = {content: content};
        dispatch({
            type: "todos",
            payload: [...state.todos, newTodo]
        })
    }

    const handleChange = (e) => {
        const {name, value } = e.target;
        dispatch({
            type: name,
            payload: value
        }); 
    }

    const handleDelete = (index) => {
        const filteredTodos = state.todos.filter((todo, i ) => {
            return i !== index;
        });        
        dispatch({
            type:"todos",
            payload: filteredTodos
        })
    }

    const handleComplete = (index) => {
        const updatedTodos = state.todos.map((todo, i)=>{
            if( index === i) {
                todo.complete = !todo.complete;
            }
            return todo;
        });
        console.log(updatedTodos)
        dispatch({
            type:"todos",
            payload: updatedTodos
        })


    }
    return (
        <div>
            <form onSubmit={ createTodo }>
                <label>What do you need to complete? </label>
                <input type="text" name="content"onChange={handleChange} value={state.content}/>
                <button>Add</button>
            </form>
            {state.todos.map((item, i ) =>
                <div>
                    <p className={ item.complete ? styles.isComplete : ''}>{item.content}
                        <input checked={item.complete} type="checkbox" name= "complete" onChange={ (e) => handleComplete(i) } />
                    </p>
                    <button onClick={(e) => handleDelete(i)}>Delete</button> 
                </div>
    
                )}

        </div>
    )

}
export default Todos