import './App.css'
import {Route, Routes} from 'react-router-dom'
import About from './Components/About'
import Home from './pages/Home'
import Main from './Components/Main'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
function App() {

  return (
    <>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects/>}/>
     </Routes>

    </>
  )
}

export default App
