export default function ErrorMessage(props) {
    const textStyle = {
        color: 'white',
        textAlign: 'center'
    }
    const errorMessageStyle = {
        backgroundColor: 'red',
        display: props.display,
        alignContent: 'center',
        width: '350px',
        marginTop: '1rem'
    }

    return <>
        <div style={errorMessageStyle}>            
            <p style={textStyle}>Usuario y/o contraseña incorrectos. Intente de nuevo por favor.</p>             
        </div>
    </>
}