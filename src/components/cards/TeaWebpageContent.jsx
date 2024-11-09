import '../../CSS/singleProjects.css'
import teaWebsite from '../../assets/teaWebsite.jpeg'

const TeaWebpageContent = ({teaInfo}) => {

    return (

        <div className="container">

            <section className='project-image'>

            <img src={teaWebsite} />

            </section>

            <section className="app-header">

                <h2>{teaInfo.project_name}</h2>

                <p>{teaInfo.app_type}</p>

            </section>

            <section className="description">

                <p>
                    
                    {teaInfo.brief_description}</p>

                    <p>View project: <a href="https://thats-the-tea.netlify.app"> {teaInfo.webAddress}</a></p>
                    
            </section>

            <section className="logos-container">

                    <img src="https://www.svgrepo.com/show/353722/expo.svg" alt="expo logo" className="logo" />

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZcpvdnbhcRhQ_D-Gxk2yO_MEYCH6hGioKYRiM_rQjZJPez2kxbJ-ODzXYUFtU2uTh78&usqp=CAU" alt="react native logo" className="logo" />

                    <img src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png" alt="firebase logo" className="logo" />

                    <img src="https://www.svgrepo.com/show/354090/mongodb.svg" alt="mongoDb logo" className="logo" />

            </section>

            <section className="app-details">

                <p>{teaInfo.app_description}</p>
           
                <p>{teaInfo.work_description}</p>

            </section>
        
        </div>
    );

}

export default TeaWebpageContent;