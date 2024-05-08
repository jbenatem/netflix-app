import NavItem from '../NavItem/NavItem'

export default function NavBar() {
    const navStyle = {
        paddingLeft: '0',
        display: 'flex',
        paddingTop: '25px'
    }

    const list = ["Inicio", "Series", "Películas", "Nuevo y Popular", "Mi lista"]
    const items = list.map((i) => {
        return (
            <NavItem item={i}/>
        )
    })

    return <>
        <nav>                
            <ul style={navStyle}>
                {items}
            </ul>
        </nav>
    </>
}