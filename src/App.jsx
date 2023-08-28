import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import { LanguageContextProvider } from './context/lenguageContext'
    
function App() {
  return (
      <>
        <Router>
          <LanguageContextProvider>
            <Routes>
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/about" element = {<About/>}/>
              <Route path = "/projects" element = {<Projects/>}/>
              <Route path = "/skills" element = {<Skills/>}/>
            </Routes>
          </LanguageContextProvider>
        </Router>
      </>
  )
}

export default App
