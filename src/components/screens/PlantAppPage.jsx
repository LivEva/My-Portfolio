import plantApp from '../../data/projects'
import PlantAppPageContent from '../cards/PlantAppPageContent'
import '../../CSS/singleProjects.css'

const PlantAppPage = () => {

    return (

        <div className='project-container'>

      {plantApp.map((appInfo, id) => {

        return (

            <PlantAppPageContent key={id} appInfo={appInfo}/>
        )
      })}
        
        </div>

    )
}

export default PlantAppPage;