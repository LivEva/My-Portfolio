import { Route, Routes } from 'react-router-dom';
import Footer from './components/main/Footer';
import Header from './components/main/Header'
import HomeScreen from './components/screens/HomeScreen';
import NavBar from './components/main/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectLists from './components/screens/ProjectsList';
import PlantAppPage from './components/screens/PlantAppPage';


function App() {

  return (

    <>

    <Header />

    <NavBar />

    <Routes>

     <Route path='/Home' element={<HomeScreen />}/>

     <Route path='/Projects' element={<ProjectLists />}/>

     <Route path='/MyPlantApp' element={<PlantAppPage/>}/>

    </Routes>

    <Footer />



    </>
  )

}

export default App
