import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import DesignSystemsAllstate from './case-studies/DesignSystemsAllstate'
import DesignSystemsHarvest from './case-studies/DesignSystemsHarvest'
import DesignSystemsPanduit from './case-studies/DesignSystemsPanduit'
import DesignAllstate from './case-studies/DesignAllstate'
import DesignHarvest from './case-studies/DesignHarvest'
import DesignPanduit from './case-studies/DesignPanduit'

const BackLink = () => {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  if (isHome) return null
  return (
    <nav className="breadcrumb">
      <Link to="/">← Back</Link>
    </nav>
  )
}

const App = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="nav-name">Maria Faulisi</Link>
          <ul>
            <li><a href="/#design-systems">Work</a></li>
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <BackLink />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design-systems/allstate" element={<DesignSystemsAllstate />} />
        <Route path="/design-systems/harvest" element={<DesignSystemsHarvest />} />
        <Route path="/design-systems/panduit" element={<DesignSystemsPanduit />} />
        <Route path="/design/allstate" element={<DesignAllstate />} />
        <Route path="/design/harvest" element={<DesignHarvest />} />
        <Route path="/design/panduit" element={<DesignPanduit />} />
      </Routes>

      <footer>
        <a href="mailto:mjfaulisi@gmail.com">mjfaulisi@gmail.com</a>
        <a href="https://linkedin.com/in/mariafaulisi" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/mariafaulisi" target="_blank" rel="noreferrer">GitHub</a>
      </footer>
    </>
  )
}

export default App
