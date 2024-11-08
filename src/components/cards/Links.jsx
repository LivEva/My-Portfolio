import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import mail from '../../assets/mail.png'
import '../../CSS/links.css'

const Links = () => {

    return (


        <section className='logos'>

            <a href="https://github.com/LivEva"><img src={github} alt="logo for github" className='symbols' /></a>

            <a href="https://www.linkedin.com/in/olivia-guest-4a7786328/"><img src={linkedin} alt="logo for linked in" className='symbols'/></a>

            <a href=""><img src={mail} alt="symbol for mail" className='symbols'/></a>

        </section>  
        
    
    )
}

export default Links;