import '../../CSS/plantAppPage.css';

const PlantAppPageContent = ({ appInfo }) => {
    return (
        <div className="plant-app-content-container">

            <div className="app-header">

                <h1>{appInfo.project_name}</h1>

                <p className="app-type">{appInfo.app_type}</p>

            </div>
            <div className="app-image-description">

                <img src={appInfo.image} alt="image of app" className="app-image" />

                <p className="brief-description">
                    
                    {appInfo.brief_description}</p>
                    
            </div>

            <div className="app-details">

                <p>{appInfo.app_description}</p>
           
                <p>{appInfo.work_description}</p>
            </div>
          
            <div className="logos-container">


                <img src="https://www.svgrepo.com/show/353722/expo.svg" alt="expo logo" className="logo" />

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfZcpvdnbhcRhQ_D-Gxk2yO_MEYCH6hGioKYRiM_rQjZJPez2kxbJ-ODzXYUFtU2uTh78&usqp=CAU" alt="react native logo" className="logo" />

                <img src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png" alt="firebase logo" className="logo" />

                <img src="https://www.svgrepo.com/show/354090/mongodb.svg" alt="mongoDb logo" className="logo" />

            </div>
        </div>
    );
};

export default PlantAppPageContent;
