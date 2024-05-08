import NavBar from '../NavBar/NavBar'
import HeaderMenu from '../HeaderMenu/HeaderMenu'

export default function Header() {
    const headerStyle = {
        paddingLeft: '40px',
        height: '100px',
        display: 'flex'
    }

    return <>
        <header style={headerStyle}>
            <img src="src/assets/netflix_logo.jpg"></img>
            <NavBar/>
            <HeaderMenu/>
        </header>    
    </>
}