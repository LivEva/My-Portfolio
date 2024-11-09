import '../../CSS/singleProjects.css'

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

                </section>
            
            <section className="logos-container">

                <img src="https://www.svgrepo.com/show/353722/expo.svg" alt="expo logo" className="logo" />

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZcpvdnbhcRhQ_D-Gxk2yO_MEYCH6hGioKYRiM_rQjZJPez2kxbJ-ODzXYUFtU2uTh78&usqp=CAU" alt="react native logo" className="logo" />

                <img src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png" alt="firebase logo" className="logo" />

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
