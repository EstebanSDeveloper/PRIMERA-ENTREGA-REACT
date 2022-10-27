import "./Container.scss"
import {Link} from "react-router-dom"

const Container = () => {
    return (

        <div className="main-container text-center">
        <div className="text-main text-white"><h3>About Us</h3>
        <h4>We are selling cereal boxes</h4></div>
        
        <div className="container-link-categorias">
        <Link className="text-white texto-links" to = {`/category/sugar`}>High Sugar Cereals</Link>
        <Link className="text-white texto-links" to = {`/`}>All our Cereals</Link>
        <Link className="texto-links text-white" to = {`/category/low-sugar`}>Low Sugar Cereals</Link></div>

        </div>

    )
}

export default Container;