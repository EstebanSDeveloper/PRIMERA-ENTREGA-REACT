import CategoryButton from "./CarButton/CategoryButton"
import './NavBar.css';
import logo from '../../assets/imagenes/logo.png';

function NavBar() {
  return (
    <div className="main-nav">
      <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
    <img className='logo-nav' src={logo} alt="logo" />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon navbar-dark"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-white" className="glow" aria-current="page" href="https://www.google.com/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" className="glow" href="https://www.google.com/">Cereal Flavors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" className="glow" href="https://www.google.com/">Bars</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" className="glow" href="https://www.google.com/">Bundles</a>
          </li>
        </ul>
        <span class="navbar-text">
        <CategoryButton/>

        </span>
      </div>
    </div>
  </nav>
      
    </div>
    
  )
}

export default NavBar
