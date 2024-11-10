import '../../CSS/singleProjects.css'
import reactLogo from '../../assets/reactLogo.png'

const PlantAppPageContent = ({ appInfo }) => {

    return (

           <div className='container'>

            <section className='project-image'>

                <img src={appInfo.image}/>

                </section>

                <section className='app-header' >

                <h2>{appInfo.project_name}</h2>

                <h3>{appInfo.app_type}</h3>

                </section>

                <section className='description' >

                <p>
                    
                    {appInfo.brief_description}</p>

                    <p>View project: <a href="https://www.youtube.com/watch?v=3zPU6vK9B9M&t=1s"> {appInfo.webAddress}</a></p>

                </section>
            
            <section className="logos-container">

                <img src="https://www.svgrepo.com/show/353722/expo.svg" alt="expo logo" className="logo" />

                <img src={reactLogo} alt="react native logo" className="logo" />

                <img src="..." alt="firebase logo" className="logo" />

                <img src="https://www.svgrepo.com/show/354090/mongodb.svg" alt="mongoDb logo" className="logo" />

        </section>

        <section className='app-details' >

            <p>{appInfo.app_description}</p>
           
            <p>{appInfo.work_description}</p>

        </section>

          
            </div>

      
    );
};

export default PlantAppPageContent;
