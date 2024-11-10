import '../../CSS/footer.css'
import Links from '../cards/Links';

const Footer = () => {

    return (

        <div className="footer-container">

        <footer className="footer">
            <p id="footer-text">&copy; {new Date().getFullYear()} | Olivia Guest</p>
            </footer>

            <section>

                <Links />

            </section>
        
        </div>
    )

}

export default Footer;