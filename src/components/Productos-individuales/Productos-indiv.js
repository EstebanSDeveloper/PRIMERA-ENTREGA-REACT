import {useParams} from "react-router-dom"
import {getProductByID} from "../../APIrest/arrayProductos"
import { useEffect, useState } from "react"

const ProductoInd = () => {
    const {idProducto} = useParams()

    const [product, setProduct] = useState({})
    
    useEffect(() => {
       setProduct(getProductByID(idProducto))
    }, []);

 

    return (
        <div>   
            {product.name}
        </div>
    )

} 

export default ProductoInd;