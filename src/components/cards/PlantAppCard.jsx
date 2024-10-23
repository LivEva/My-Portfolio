import { Link } from "react-router-dom";

const PlantAppCard = ({ project }) => {

    return (

        <div className="project-container">

        <Link to='/MyPlantApp'><img src="https://i.pinimg.com/474x/99/3f/2f/993f2f93e55ae61a46d760a1bc5c3a71.jpg" alt="Image of project" className="image"/></Link>
        <h2>My Plant App</h2>
        <h3>Mobile app (IOS & Android)</h3>
        <p>"An app designed for casual plant owners and botonists alike."</p>

        </div>
        
    )

}

export default PlantAppCard;