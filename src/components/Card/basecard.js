import Counter from "./Counter_Button/counter"
import "./card.css"
import {Link} from "react-router-dom"


export const BaseCard = ({id, name, image, price, category}) => {

    return (
        <div className="card-cereals">
            <Link  className="link" to = {`product/${id}`}>
            <h3 className="cereal-name">{name}</h3>
            <img className="img-cereals" alt={``} src={image}/>
            <div className="category-id"><p className="category-text">{category}</p>
            <p className="category-text">{`Código # ${id}`}</p></div>
            <p className="precio-text">{`Precio: ${price} USD`}</p>
            </Link>
            <Counter/>
            
        </div>
    )
}

export default BaseCard