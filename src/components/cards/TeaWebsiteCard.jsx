import { Link } from "react-router-dom";
import '../../CSS/singleProjects.css'
import teacup from '../../assets/tea.png'


const TeaWebsiteCard = () => {
  
    return (

        <div className="card-container">

        <Link to='/ThatsTheTea'><img src={teacup}alt="Image of project" className="image"/></Link>
        <h2>That's The Tea</h2>
        <h3>Website</h3>
        <p> "A social space to read, comment and vote for articles."</p>

        </div>
        
    )

}

export default TeaWebsiteCard;