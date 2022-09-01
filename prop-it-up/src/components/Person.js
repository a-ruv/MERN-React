import React, { Component } from "react";

class Person extends Component{
    constructor(props){
        super(props);
        const {age} = this.props;
        this.state = {
            age: age
        }
    }
    birthday = () =>{
        this.setState({age:this.state.age + 1});
    }
    render(){
        const {firstName, lastName, hairColor} = this.props
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={ this.birthday}>Birthday button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default Person