import './index.css'
import { useNavigate } from "react-router-dom";

export default function LoginMenu() {
    const logoStyle = {
        paddingLeft: '150px',
        height: '130px',
        display: 'flex'
    }

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
            navigate("/menu");
        }else {
            window.alert("Contraseña incorrecta. Intente de nuevo por favor")
        }
    }

    return <>
        <img style={logoStyle} src='src\assets\Netflix-Logo-Without-Background.png'></img>
        <div style={loginFormStyle}>
            <h2>Iniciar sesión</h2>
            <input id="input-username" style={inputFromStyle} type="text" placeholder="Email o número de teléfono"></input>
            <input id="input-password" style={inputFromStyle} type="password" placeholder="Contraseña"></input>
            <input style={submitButtonStyle} type="submit" value='Iniciar sesión' onClick={validateCredentials}></input>
        </div>
    </>
}