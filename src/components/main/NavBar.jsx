import 'animate.css';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const NavBar = () => {

    return (

<div className='nav-bar-container'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      
      <div className="container-fluid">

        <button 

        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          
          <span className="navbar-toggler-icon"></span>

        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link active"><Link to="/">Home</Link></button>
            </li>
            <li className="nav-item">
            <button className="nav-link"><Link to="/Projects">Projects</Link></button>
            </li>
            <li className="nav-item">
            <button className="nav-link"><Link to="/Certifications">Certifications</Link></button>
            </li>
          </ul>
        </div>
      </div>

    
    </nav>
    
</div>

    )

}

export default NavBar;

