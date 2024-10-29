import '../../CSS/footer.css'

const Footer = () => {

    return (

        <div className="footer-container">

        <footer className="footer">
            <p id="footer-text">&copy; {new Date().getFullYear()} My Website | All rights reserved.</p>
            </footer>
        
        </div>
    )

}

export default Footer;