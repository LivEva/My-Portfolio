import '../../CSS/singleProjects.css'

const TeaWebpageContent = ({teaInfo}) => {

    return (

        <div className="container">

            <section className='project-image'>

            <img src={teaInfo.image} id="app-image" />

            </section>

            <section className="app-header">

                <h1 id='project-name'>{teaInfo.project_name}</h1>

                <p id="project-type">{teaInfo.app_type}</p>

            </section>

            <section className="description">

                <p>
                    
                    {teaInfo.brief_description}</p>
                    
            </section>

            <section className="app-details">

                <p>{teaInfo.app_description}</p>
           
                <p>{teaInfo.work_description}</p>

            </section>
        
        </div>
    );

}

export default TeaWebpageContent;