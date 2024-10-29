import '../../CSS/singleProjects.css'

const TeaWebpageContent = ({teaInfo}) => {

    return (
        <div className="tea-page-container">

            <div className="app-header">

                <h1>{teaInfo.project_name}</h1>

                <p className="app-type">{teaInfo.app_type}</p>

            </div>

            <div className="image-description">

                <img src={teaInfo.image} className="app-image" />

                <p className="brief-description">
                    
                    {teaInfo.brief_description}</p>
                    
            </div>

            <div className="app-details">

                <p>{teaInfo.app_description}</p>
           
                <p>{teaInfo.work_description}</p>
            </div>
        
        </div>
    );

}

export default TeaWebpageContent;