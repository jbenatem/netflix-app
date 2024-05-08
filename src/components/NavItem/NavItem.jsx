export default function NavItem(props) {
    const itemStyle = {
        fontSize: '14px',
        marginRight: '1rem',
        listStyleType: 'none',
        color: 'white',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        fontFamily: 'Arial, Helvetica, sans-serif'
    }

    return <>
        <li style={itemStyle}>{props.item}</li>
    </>
}