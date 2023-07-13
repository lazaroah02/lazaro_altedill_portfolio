import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
    
function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/about" element = {<About/>}/>
            <Route path = "/projects" element = {<Projects/>}/>
            <Route path = "/project-detail" element = {<ProjectDetail/>}/>
            <Route path = "/skills" element = {<Skills/>}/>
          </Routes>
        </Router>
      </>
  )
}

export default App
