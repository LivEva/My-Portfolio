import '../../CSS/certificateCards.css'

const CertificateCard = ({certificate}) => {

    return (

    
        <div className="certificate-container">

            <div className="certificates">

            <h3>{certificate.name}</h3>

            <img src={certificate.certificate_image} />

            <p>{certificate.description}</p>

            </div>


        </div>
    )



}

export default CertificateCard;