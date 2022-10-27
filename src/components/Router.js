import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductoInd from ".//Productos-individuales/Productos-indiv"
import Card from "./Card/card"
import NavBar from "./NavBar/NavBar"
import Container from "./NavBar/Container/Container"


const Router = () => {
    return (
      <BrowserRouter>
          <NavBar />
          <Container/>
        <Routes>
          <Route path="/" element={<Card />}></Route>
          <Route path="/category/:cat" element={<Card />}></Route>
          <Route path="/producto/:idProducto" element={<ProductoInd />}></Route>
          <Route path="/*" element={<div>404 not found</div>}></Route>
        </Routes>
      </BrowserRouter>
    );
  };
  

  
export default Router;