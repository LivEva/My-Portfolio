import { Route, Routes } from 'react-router-dom';
import Footer from './components/main/Footer';
import Header from './components/main/Header'
import HomeScreen from './components/screens/HomeScreen';
import NavBar from './components/main/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectLists from './components/screens/ProjectsList';
import PlantAppPage from './components/screens/PlantAppPage';
import TeaPage from './components/screens/TeaPage';


function App() {

  return (

    <div className='entire-container'>

    <Header />

    <NavBar />

    <Routes>

     <Route path='/Home' element={<HomeScreen />}/>

     <Route path='/Projects' element={<ProjectLists />}/>

     <Route path='/MyPlantApp' element={<PlantAppPage/>}/>

     <Route path='/ThatsTheTea' element={<TeaPage/>}/>

    </Routes>

    <Footer />



    </div>
  )

}

export default App
