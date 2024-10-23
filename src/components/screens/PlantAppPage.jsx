import plantApp from '../../data/projects'
import PlantAppPageContent from '../cards/plantAppPageContent'

const PlantAppPage = () => {

    console.log(plantApp)

    return (

        <>

      {plantApp.map((appInfo, id) => {

        return (

            <PlantAppPageContent key={id} appInfo={appInfo}/>

        )


      })}
        
        </>
    )


}

export default PlantAppPage;