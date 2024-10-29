import plantApp from '../../data/projects'
import PlantAppPageContent from '../cards/plantAppPageContent'
import '../../CSS/singleProjects.css'

const PlantAppPage = () => {

    return (

      <div className='plant-page-container'>

        <div className='project-container'>

      {plantApp.map((appInfo, id) => {

        return (

            <PlantAppPageContent key={id} appInfo={appInfo}/>

        )


      })}
        
        </div>

        </div>
    )


}

export default PlantAppPage;