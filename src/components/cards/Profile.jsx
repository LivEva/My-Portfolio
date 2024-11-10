import profile from '../../assets/profilePicture.jpeg'
import Links from '../cards/Links'
import '../../CSS/home.css'
import locationPin from '../../assets/locationPin.png'

const Profile = () => {

    return (

        <section className="profile-container">

            <img src={profile} className='profile-picture' />

            <h2>Junior Software Developer</h2>

            <p><img src={locationPin} alt="" id='locationPin'/>Manchester, UK</p>

            <Links />

            <section className='bio'>
                
                <p>An enthusiastic junior software developer and a recent graduate of Northcoders intensive full-stack bootcamp. I’ve found coding to be like an evolving puzzle with endless possibilities and being a naturally curious person, I’m driven by the desire to understand and innovate. With a background in music production, I've found parallels between coding and creating music—both involve learning, experimenting, and crafting something unique. These aspects of creativity and logic is what makes coding so fascinating and rewarding for me. I am passionate about contributing to a team, pushing the boundaries of what’s possible through code, creating impactful solutions together and continuously growing. 
                    
                </p>
            
                </section>

            
        
        </section>
    )
}

export default Profile;