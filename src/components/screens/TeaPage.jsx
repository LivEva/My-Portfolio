import TeaProjectInfo from '../../data/teaProject'
import TeaWebpageContent from '../cards/TeaWebpageContent';
import '../../CSS/singleProjects.css'

const TeaPage = () => {

    return (

        <div className='project-container'>

            {TeaProjectInfo.map((teaInfo, id) => {

                return (

                    <TeaWebpageContent key={id} teaInfo={teaInfo}/>
                )
            })}

            
        </div>

    )

}

export default TeaPage;