import { Link } from "react-router-dom";
import plantsWallpaper from '../../assets/plants.jpeg'

const PlantAppCard = () => {

    return (

        <div className="card-container">

        <Link to='/MyPlantApp'><img src={plantsWallpaper} alt="Image of project" className="image"/></Link>
        <h2>My Plant App</h2>
        <h3>Mobile app (IOS & Android)</h3>
        <p>"An app designed for casual plant owners and botonists alike."</p>

        </div>
        
    )

}

export default PlantAppCard;