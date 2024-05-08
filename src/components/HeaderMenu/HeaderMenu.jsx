export default function HeaderMenu() {
    const searchButtonStyle = {
        height: '25px',
        marginRight: '2rem',
        width: '25px'
    }

    const searchInputStyle = {
        marginRight: '1rem',
        paddingTop: '6px',
        height: '25px',
        width: '250px',
        borderRadius: '5px 5px 5px 5px'
    }

    const avatarStyle = {
        height: '25px',
        marginRight: '1rem',
        width: '25px'
    }

    const menuStyle = {
        paddingLeft: '30rem',
        paddingTop: '33px'
    }

    return <div style={menuStyle}>
        <input style={searchInputStyle} type="text" placeholder="¿Qué estás buscando?" name="fname"></input>
        <input type="image" style={searchButtonStyle} src="src/assets/search-icon.png" alt="Submit"></input>
        <img style={avatarStyle} src="src/assets/Netflix-avatar.png"></img> 
    </div>
}