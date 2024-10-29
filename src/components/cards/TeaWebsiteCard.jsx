import { Link } from "react-router-dom";
import '../../CSS/singleProjects.css'


const TeaWebsiteCard = () => {
  
    return (

        <div className="card-container">

        <Link to='/ThatsTheTea'><img src="https://i.pinimg.com/474x/99/3f/2f/993f2f93e55ae61a46d760a1bc5c3a71.jpg" alt="Image of project" className="image"/></Link>
        <h2>That's The Tea</h2>
        <h3>Website</h3>
        <p> "A social space to read, comment and vote for articles."</p>

        </div>
        
    )

}

export default TeaWebsiteCard;