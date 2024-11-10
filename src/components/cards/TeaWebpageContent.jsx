import '../../CSS/singleProjects.css'
import teaWebsite from '../../assets/teaWebsite.jpeg'
import reactLogo from '../../assets/reactLogo.png'
import SQL from '../../assets/SQL-lOGO.png'
import NodeLogo from '../../assets/NodeLogo.png'
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

                    <img src={reactLogo}alt="expo logo" className="logo" />

                    <img src={NodeLogo} alt="Node.js logo" className="logo" />

                    <img src={SQL} alt="PostgreSQL logo" className="logo" />


            </section>

            <section className="app-details">

                <p>{teaInfo.work_description}</p>

                <p>{teaInfo.app_description}</p>

            </section>
        
        </div>
    );

}

export default TeaWebpageContent;