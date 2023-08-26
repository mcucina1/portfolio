import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IndividualProject from './pages/IndividualProject';

function App() {

  return (
      <Router>
        <Navbar/>
        <div className='flex justify-center'>
          <div className='min-h-[calc(88vh-100px)] flex justify-start max-w-[1280px] w-full'>
          <Routes>
            <Route path='*' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/projects/:url' element={<IndividualProject/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
          </div>
        </div>
        <Footer/>
      </Router>
  );
}

export default App;
