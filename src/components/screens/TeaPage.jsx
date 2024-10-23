import TeaProjectInfo from '../../data/teaProject'
import TeaWebpageContent from '../cards/TeaWebpageContent';

const TeaPage = () => {

    return (

        <div>

            {TeaProjectInfo.map((teaInfo, id) => {

                return (

                    <TeaWebpageContent key={id} teaInfo={teaInfo}/>
                )
            })}

            
        </div>
    )

}

export default TeaPage;