import './index.css'
import Login from '../../components/Login/Login';

export default function LoginMenu() {

    const logoStyle = {
        paddingLeft: '150px',
        height: '130px',
        display: 'flex'
    }

    return <>
        <img style={logoStyle} src='src\assets\Netflix-Logo-Without-Background.png'></img>
        <Login/>
    </>
}