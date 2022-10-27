import { useState, useEffect } from "react"
import BaseCard from "./basecard"
import "./card.css"
import productosApi from "../../APIrest/arrayProductos"
import { useParams } from 'react-router-dom';



const Card = () => {

    const [filter, setFilter] = useState("")
    const [productosList, setProductosList] = useState([])
    const {cat} = useParams()

    const getProductos = () => {
        setTimeout(() => {
            const cajasCereal = productosApi;
            setProductosList(cajasCereal);
        }, 2000)
    }

    useEffect(() => {
        getProductos()
    }, []);

    return(
        <div className="card-productos">
            <h1 className="best-sellers">BEST SELLERS</h1>
            <input
            id="filter"
            name="filter"
            type="text"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
        />

            <div className="cards-container">
        {/* ESTO ES LO QUE SE CONOCE COMO TERNARIO, ES UNA CONDICION ABREVIADA */}
            {cat? productosList
                .filter(productos => productos.name.includes(filter))
                .filter((productos) => productos.category === cat)
                .map((product, i) => (
                    <BaseCard 
                    id = {i}
                    key= {i}
                    name = {product.name}
                    image = {product.image}
                    price = {product.price}
                    category = {product.category}
                    />
                ))
                :productosList
                .filter(productos => productos.name.includes(filter))  
                .map((product, i) => (
                    <BaseCard 
                    id = {i}
                    key= {i}
                    name = {product.name}
                    image = {product.image}
                    price = {product.price}
                    category = {product.category}
                    />
                ))}
                
            </div>
        </div>
    )
}

export default Card


