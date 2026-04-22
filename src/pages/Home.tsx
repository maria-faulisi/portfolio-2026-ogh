import { Link } from 'react-router-dom'
import heroImg from '../assets/home-hero.png'
import logoAllstate from '../assets/logo-allstate.svg'
import logoHarvest from '../assets/logo-harvest.svg'
import logoPanduit from '../assets/logo-panduit.svg'

const Home = () => {
  return (
    <main>
      {/* Hero */}
      <section id="hero">
        <img src={heroImg} alt="Maria Faulisi" className="hero-portrait" />
        <p className="eyebrow">Senior IC Portfolio</p>
        <h1>Maria Faulisi</h1>
        <p className="tagline">
          Designing and building scalable, production-ready experiences in complex systems
        </p>
        <ul className="skills">
          <li>Design Systems</li>
          <li>React / TypeScript</li>
          <li>Storybook</li>
          <li>Token Architecture</li>
          <li>UX Architecture</li>
        </ul>
      </section>

      {/* Design Systems Work */}
      <section id="design-systems">
        <h2>Design Systems</h2>
        <ul className="project-list">
          <li className="project">
            <Link to="/design-systems/allstate">
              <img src={logoAllstate} alt="Allstate" className="project-logo" />
              <h3>Allstate</h3>
              <p className="project-description">Reducing design system drift across tools and handoffs</p>
              <ul className="metrics">
                <li>~90% Sketch-code parity</li>
                <li>25% rework reduction</li>
                <li>40+ teams unified</li>
              </ul>
            </Link>
          </li>
          <li className="project">
            <Link to="/design-systems/harvest">
              <img src={logoHarvest} alt="Harvest" className="project-logo" />
              <h3>Harvest</h3>
              <p className="project-description">Clarifying dual-stack component guidance</p>
              <ul className="metrics">
                <li>40% adoption increase</li>
                <li>60% fewer support requests</li>
              </ul>
            </Link>
          </li>
          <li className="project">
            <Link to="/design-systems/panduit">
              <img src={logoPanduit} alt="Panduit" className="project-logo" />
              <h3>Panduit</h3>
              <p className="project-description">Aligning competing business units through shared design system</p>
              <ul className="metrics">
                <li>3x component adoption</li>
                <li>50% less redundant code</li>
                <li>70% fewer accessibility issues</li>
              </ul>
            </Link>
          </li>
        </ul>
      </section>

      {/* Product / UX Work */}
      <section id="product-ux">
        <h2>Product &amp; UX</h2>
        <ul className="project-list">
          <li className="project">
            <Link to="/design/allstate">
              <img src={logoAllstate} alt="Allstate" className="project-logo" />
              <h3>Allstate</h3>
              <p className="project-description">Reducing quote flow complexity</p>
            </Link>
          </li>
          <li className="project">
            <Link to="/design/harvest">
              <img src={logoHarvest} alt="Harvest" className="project-logo" />
              <h3>Harvest</h3>
              <p className="project-description">Unifying saved and recurring report workflows</p>
            </Link>
          </li>
          <li className="project">
            <Link to="/design/panduit">
              <img src={logoPanduit} alt="Panduit" className="project-logo" />
              <h3>Panduit</h3>
              <p className="project-description">Modernizing legacy distributor portal</p>
            </Link>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section id="contact">
        <h2>Want to talk through the work?</h2>
        <a href="mailto:mjfaulisi@gmail.com">mjfaulisi@gmail.com</a>
      </section>
    </main>
  )
}

export default Home
