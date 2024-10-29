import TeaProjectInfo from '../../data/teaProject'
import TeaWebpageContent from '../cards/TeaWebpageContent';
import '../../CSS/teaPage.css'

const TeaPage = () => {

    return (

        <div className='tea-page-container'>

            {TeaProjectInfo.map((teaInfo, id) => {

                return (

                    <TeaWebpageContent key={id} teaInfo={teaInfo}/>
                )
            })}

            
        </div>
    )

}

export default TeaPage;