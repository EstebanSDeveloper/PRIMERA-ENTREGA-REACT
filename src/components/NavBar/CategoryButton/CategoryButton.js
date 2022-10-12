import carrito from '../../../assets/imagenes/carrito.png';
import './CategoryButton.css'

const CategoryButton = () => {

    return(
        <div>
            <img className='carrito' src={carrito} alt="carrito" />
        </div>

    )
}

export default CategoryButton;