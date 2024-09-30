import { Route, Routes } from 'react-router-dom';
import './App.css'
import Footer from './Footer';
import Header from './Header'
import HomeScreen from './HomeScreen';
import NavBar from './NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectLists from './ProjectsList';


function App() {

  return (

    <>

    <Header />

    <NavBar />

    <Routes>

     <Route path='/Home' element={<HomeScreen />}/>

     <Route path='/Projects' element={<ProjectLists />}/>

    </Routes>

    <Footer />



    </>
  )

}

export default App
