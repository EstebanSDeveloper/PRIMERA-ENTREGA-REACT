import CategoryButton from "./CategoryButton/CategoryButton"
import './NavBar.css';

function NavBar() {
  return (
    <div className="main-nav">
      <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand text-white" href="#">The Sugar Show</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link text-white" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Cereal Flavors</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Bars</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white" href="#">Bundles</a>
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
