import { useState } from "react"

const Userform = props => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [firstnameError, setFirstnameError] = useState("");
    const [lastnameError, setLastnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirm};
    };

    const handleFirstName = (e) => {
        setFirstname(e.target.value);
        if(e.target.value.length < 2){
            setFirstnameError("First Name must be at least 2 characters");
        }else{
            setFirstnameError("");
        }
    }
    const handleLastName = (e) => {
        setLastname(e.target.value);
        if(e.target.value.length < 2){
            setLastnameError("Last Name must be at least 2 characters");
        }else{
            setLastnameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters");
        }else{
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters");
        }else{
            setPasswordError("");
        }
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value);
        if(e.target.value !== password){
            setConfirmError("Passwords must match");
        }else {
            setConfirmError("");
        }
    }
    return(
        <div>

        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ handleFirstName } />
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{firstnameError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handleLastName } />
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{lastnameError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ? 
                    <p style={{color:'red'}}>{emailError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{passwordError}</p> :
                    ""
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleConfirm } />
                {
                    confirmError ?
                    <p style={{color:'red'}}>{confirmError}</p> :
                    ""
                }
            </div>
        </form>
        </div>
    );
};
export default Userform;