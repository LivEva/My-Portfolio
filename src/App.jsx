import { Route, Routes } from 'react-router-dom';
import Footer from './components/main/Footer';
import Header from './components/main/Header'
import HomeScreen from './components/screens/HomeScreen';
import NavBar from './components/main/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectLists from './components/screens/ProjectsList';
import PlantAppPage from '../src/components/screens/PlantAppPage'
import TeaPage from './components/screens/TeaPage';
import Certifications from './components/screens/Certifications';


function App() {

  return (

    <div className='entire-container'>

    <Header />

    <NavBar />

    <Routes>

     <Route path='/' element={<HomeScreen />}/>

     <Route path='/Projects' element={<ProjectLists />}/>

     <Route path='/Certifications' element={<Certifications/>}/>

     <Route path='/MyPlantApp' element={<PlantAppPage/>}/>

     <Route path='/ThatsTheTea' element={<TeaPage/>}/>

   

    </Routes>

    <Footer />



    </div>
  )

}

export default App
