export default function Card(props) {
    const cardStyle = {
        heigth: '150px',
        width: '300px'
    }

    const buttonStyle = {
        backgroundColor: 'black',
        borderWidth: '0px'
    }

    return <>
        <button style={buttonStyle} onClick={console.log(props)}>
            <img type="image" 
            style={cardStyle} 
            src={props.content.image}></img>
        </button>
    </>
}