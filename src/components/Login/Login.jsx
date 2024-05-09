import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [displayErrorMessage, setdisplayErrorMessage] = useState("none");

    const loginFormStyle = {
        display: 'grid',
        backgroundColor: 'black',
        padding: '48px 68px 68px 48px',
        position: 'absolute',
        top: '25%',
        left: '35%'
    }

    const inputFromStyle = {
        backgroundColor: 'black',
        borderRadius: '2px 2px 2px 2px',
        borderColor: 'grey',
        color: 'white',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        paddingBottom: '0.5rem',
        paddingTop: '1.5rem',
        marginBottom: '1rem',
        width: '314px',
        fontSize: '16px'
    }

    const submitButtonStyle = {
        color: 'white',
        backgroundColor: 'red',
        borderRadius: '2px 2px 2px 2px',
        borderColor: 'red',
        paddingRight: '1rem',
        paddingLeft: '1rem',
        paddingBottom: '0.5rem',
        paddingTop: '1.5rem',
        width: '350px',
        fontSize: '16px',
        fontWeight: 'bold'
    }

    const navigate = useNavigate();

    function validateCredentials () {
        const username = document.querySelector("#input-username").value
        const password = document.querySelector("#input-password").value
        if (username === "user" && password === "12345"){
            setdisplayErrorMessage("none");
            navigate("/menu");
        }else {
            setdisplayErrorMessage("flex");
        }
    }

    return <>
        <div style={loginFormStyle}>
            <h2>Iniciar sesión</h2>
            <input id="input-username" style={inputFromStyle} type="text" placeholder="Email o número de teléfono"></input>
            <input id="input-password" style={inputFromStyle} type="password" placeholder="Contraseña"></input>
            <input style={submitButtonStyle} type="submit" value='Iniciar sesión' onClick={validateCredentials}></input>
            <ErrorMessage display={displayErrorMessage}/>
        </div>
    </>
}