import '../../CSS/certificationsPage.css'
import CertificateCard from '../cards/CertificateCard';
import certificates from '../../data/certificates'


const Certifications = () => {

  return (

    <div>

        {certificates.map((certificate, id) => {

            return <CertificateCard key={id} certificate={certificate}/>


        })}


    </div>
  )

}

export default Certifications;