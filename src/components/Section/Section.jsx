import Carrousel from '../Carrousel/Carrousel'

import './Section.css'

export default function Section() {
    const series = [
        {
            "id": "1",
            "typeId": "1",
            "title": "Dark",
            "summary": "La desaparición de un niño lleva a cuatro familias a una frenética búsqueda, mientras descubren un misterio que abarca tres generaciones.",
            "image": "https://peru21.pe/resizer/CgvTw--98AiO1IG6V4I_vCUP_MQ=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/5SWBYO6YOJDPNITA5GKARRTDUI.jpg",
            "rating": "9.3",
            "genre": "Ficción",
            "seasons": "3"
        },
        {
            "id": "2",
            "typeId": "1",
            "title": "Stranger Things",
            "summary": "Después de la extraña desaparición de un niño, un pueblo se encuentra ante un misterio que revela experimentos secretos, fuerzas sobrenaturales y a una niña muy especial.",
            "image": "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABV5lteI3eHet1nPBQKC_uEChESjqQfYpRwMWLR0wULt52odnxQtG69JNFDj9N4maZWJWDFZyi2sc1YzZ8mKE4Ajmt7Btva1CnWagGbYXVMp3t4OETM4LwiD70dHu-qWUbBAesQ.jpg?r=c68",
            "rating": "9.5",
            "genre": "Ficción",
            "seasons": "4"
        },
        {
            "id": "3",
            "typeId": "1",
            "title": "Breaking Bad",
            "summary": "Un profesor de Química de secundaria con cáncer terminal se asocia a un exestudiante para asegurar el futuro de su familia al fabricar y vender metanfetamina.",
            "image": "https://i.blogs.es/16e585/breaking-bad/1366_2000.jpg",
            "rating": "9.5",
            "genre": "Acción",
            "seasons": "5"
        },
        {
            "id": "4",
            "typeId": "1",
            "title": "ONE PIECE",
            "summary": "Monkey D. Luffy y su tripulación pirata exploran un mundo fantástico de océanos infinitos e islas exóticas en busca del mayor tesoro del mundo para convertirse en el próximo Rey Pirata.",
            "image": "https://www.lacasadeel.net/wp-content/uploads/2023/09/One-Piece-Netflix-2-700x394.webp",
            "rating": "9.5",
            "genre": "Acción",
            "seasons": "1"
        },
        {
            "id": "5",
            "typeId": "1",
            "title": "Black Mirror",
            "summary": "Esta surrealista serie de antología repleta de historias retorcidas muestra los peores rasgos de la humanidad, sus grandes innovaciones y mucho más.",
            "image": "https://e.rpp-noticias.io/xlarge/2023/05/11/062806_1426698.jpg",
            "rating": "9.0",
            "genre": "Ficción",
            "seasons": "6"
        },
        {
            "id": "6",
            "typeId": "1",
            "title": "The Witcher",
            "summary": "Geralt de Rivia, el legendario brujo cazador de monstruos, gravita inexorablemente hacia su destino en un mundo de tormentos y humanas traiciones.",
            "image": "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQT8CAaXXLoP96rbd4XzKB9uKAUkP9xScDNF-OXW-MxcxYOCR_kIfs12nG0-Bvz4P_V-E0obVEDEH8e8uiaaeS4dY2tF6iOJMaAe.jpg?r=051",
            "rating": "9.2",
            "genre": "Fantasía",
            "seasons": "3"
        }
    ]

    const movies = [
        {
            "id": "1",
            "typeId": "2",
            "title": "Jumanji: En la selva",
            "summary": "Un videojuego absorbe a cuatro estudiantes. Una vez en la selva, deben embarcarse en una búsqueda en sus avatares, que no coinciden para nada con la realidad.",
            "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEikdPPZQ2XA0zdUa3oPLeyFsoFOeTVg0evFNqgKziRr8sLSXqnhKQzfVzYYA0YA7Fp1pu2SSosv-VQUDWOsVKabCw9sSZcBGE9SpplhXJ6cKWoIeeOwOjol9JvxzcELt-F5EDgdcg7mIA3W/s675/Jumanji_TVLaint.jpg",
            "rating": "8.0",
            "genre": "Fantasía",
            "duration": "1 h 59 min"
        },
        {
            "id": "2",
            "typeId": "2",
            "title": "Kung Fu Panda 4",
            "summary": "Po está entrenando a un nuevo guerrero que ocupe su lugar para que él pueda convertirse en líder espiritual del Valle de la Paz. Sin embargo, la irrupción de una malvada hechicera que puede cambiar de apariencia trastoca sus planes.",
            "image": "https://larazon.pe/wp-content/uploads/2024/03/Captura-de-pantalla-2024-03-07-124329.jpg",
            "rating": "8.3",
            "genre": "Aventura",
            "duration": "1 h 34 min"
        },
        {
            "id": "3",
            "typeId": "2",
            "title": "Top Gun: Maverick",
            "summary": "Maverick, quien lleva 30 años de servicio, es ahora instructor de pilotos militares. Una última misión, un sacrificio final, obliga a este maestro de los cielos a enfrentar las heridas abiertas del pasado y sus temores más profundos.",
            "image": "https://m.media-amazon.com/images/S/pv-target-images/5099b0bb5c1a20bc2f43fe3a4934c94412c842a595deb5220d70a7ee959aae29.jpg",
            "rating": "8.2",
            "genre": "Acción",
            "duration": "2 h 11 min"
        },
        {
            "id": "4",
            "typeId": "2",
            "title": "Godzilla y Kong: El nuevo imperio",
            "summary": "Godzilla y Kong se enfrentan a una amenaza colosal escondida en lo profundo del planeta, desafiando su propia existencia y la supervivencia de la raza humana.",
            "image": "https://e.rpp-noticias.io/xlarge/2024/03/18/573157_1554528.webp",
            "rating": "9.5",
            "genre": "Acción",
            "duration": "1 h 55 min"
        },
        {
            "id": "5",
            "typeId": "2",
            "title": "Son como niños",
            "summary": "Un grupo de amigos y excompañeros descubren que envejecer no siempre significa madurar cuando se reúnen para honrar la memoria de su entrenador de baloncesto.",
            "image": "https://m.media-amazon.com/images/S/pv-target-images/bde8881567b130a785647cfa67c3a89c6583ebe6bee758ebf2129b89c7d6a9e8.jpg",
            "rating": "6.0",
            "genre": "Comedia",
            "duration": "1 h 42 min"
        },
        {
            "id": "6",
            "typeId": "2",
            "title": "Vaguito",
            "summary": "Vaguito, un perro abandonado es rescatado por Pancho un dirigente honesto de una asociación pesquera. Pancho se encuentra enfrentado a una mafia de pescadores y su lucha por impartir justicia desencadenará junto a Vaguito, una serie de eventos por lo que será víctima de una traición en alta mar. Luego de la traición, Vaguito, fiel a su amigo se rehusará a abandonar la playa y se quedará a esperar día tras día al amigo del que no pudo despedirse y que yace en las profundidades del mar.",
            "image": "https://imgmedia.larepublica.pe/640x371/larepublica/original/2024/04/17/662075c5f7f06c7b9b4b9373.webp",
            "rating": "8.0",
            "genre": "Drama",
            "duration": "1 h 40 min"
        },
        {
            "id": "7",
            "typeId": "2",
            "title": "Oppenheimer",
            "summary": "Durante la Segunda Guerra Mundial, el teniente general Leslie Groves designa al físico J. Robert Oppenheimer para un grupo de trabajo que está desarrollando el Proyecto Manhattan, cuyo objetivo consiste en fabricar la primera bomba atómica.",
            "image": "https://www.cnet.com/a/img/resize/6b510aa8f8cb29a69cb3eeabed7d38e70c250065/hub/2024/01/19/d572f9ea-9310-479a-a03a-fc7ec84582b3/oppenheimer-promo.jpg?auto=webp&fit=crop&height=675&precrop=758,426,x0,y253&width=1200",
            "rating": "9.5",
            "genre": "Drama",
            "duration": "3 h 00 min"
        }
    ]

    return <>
        <section>
            <h2>Series</h2>
            <Carrousel data={series}/>
            <h2>Peliculas</h2>
            <Carrousel data={movies}/>
        </section>    
    </>
}