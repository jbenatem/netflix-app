import Card from '../Card/Card'

const carrouselStyle = {
    display: 'flex'
}

export default function Carrousel(props) {
    return <div style={carrouselStyle}>
        {
            props.data.map((obj) => {
                return <Card key={obj.id} content={obj}/>
            })
        }
    </div>
}