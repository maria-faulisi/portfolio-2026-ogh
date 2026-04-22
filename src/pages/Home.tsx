import { Link } from 'react-router-dom'
import heroImg from '../assets/home-hero.png'
import avatarImg from '../assets/avatar.svg'
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
        <h2 className="tagline">
          Designing and building scalable, production-ready experiences in complex systems.
        </h2>
        <p className="skills">Design Systems | React/TypeScript | Storybook | Token Architecture | UX Architecture</p>
      </section>

      {/* Design Systems Work */}
      <section id="design-systems">
        <ul className="project-list">
          <li className="project">
            <Link to="/design-systems/allstate">
              <img src={logoAllstate} alt="Allstate" className="project-logo" />
              <h4>Reducing Design System Drift Across Tools and Handoffs</h4>
              <p className="project-description">Identified and corrected drift between design, handoff, and implementation artifacts, tightening system contracts so components, tokens, and accessibility rules stayed aligned from Sketch to code.</p>
              <ul className="metrics">
                <li><span className="metric-value">~90%</span> Sketch-code parity</li>
                <li><span className="metric-value">25%</span> Rework reduction</li>
                <li><span className="metric-value">40+</span> Teams unified</li>
              </ul>
            </Link>
          </li>
          <li className="project">
            <Link to="/design-systems/harvest">
              <img src={logoHarvest} alt="Harvest" className="project-logo" />
              <h4>Clarifying Dual-Stack Component Guidance</h4>
              <p className="project-description">Reduced confusion in a Rails + React design system by separating implementation guidance, defining clear boundaries, and making correct usage easier than guesswork.</p>
              <ul className="metrics">
                <li><span className="metric-value">40%</span> Adoption increase</li>
                <li><span className="metric-value">60%</span> Fewer support requests</li>
              </ul>
            </Link>
          </li>
          <li className="project">
            <Link to="/design-systems/panduit">
              <img src={logoPanduit} alt="Panduit" className="project-logo" />
              <h4>Aligning Competing Business Units Through a Shared Design System</h4>
              <p className="project-description">Designed a shared AEM component system that aligned siloed business units with competing priorities while supporting a new platform foundation and parallel application redesigns.</p>
              <ul className="metrics">
                <li><span className="metric-value">3x</span> Component adoption</li>
                <li><span className="metric-value">50%</span> Less redundant code</li>
                <li><span className="metric-value">70%</span> Fewer a11y issues</li>
              </ul>
            </Link>
          </li>
        </ul>
      </section>

      {/* CTA */}
      <section id="contact">
        <h3>Want to talk through the work? I'm happy to walk through decisions, constraints, and outcomes.</h3>
        <a href="mailto:mjfaulisi@gmail.com">Email me</a>
      </section>

      {/* Product / UX Work */}
      <section id="product-ux">
        <ul className="project-list">
          <li className="project">
            <Link to="/design/allstate">
              <img src={logoAllstate} alt="Allstate" className="project-logo" />
              <h4>Reducing Quote Flow Complexity</h4>
              <p className="project-description">Re-architected a multi-driver, multi-vehicle quote flow to reduce form length, improve agent efficiency, and scale across real household configurations.</p>
            </Link>
          </li>
          <li className="project">
            <Link to="/design/harvest">
              <img src={logoHarvest} alt="Harvest" className="project-logo" />
              <h4>Unifying saved and recurring report workflows</h4>
              <p className="project-description">Identified structural UX duplication and consolidated reporting flows to reduce user rework, engineering complexity, and time to market.</p>
            </Link>
          </li>
          <li className="project github-card">
            <a href="https://github.com/maria-faulisi" target="_blank" rel="noreferrer">
              <h3>Github</h3>
              <img src={avatarImg} alt="GitHub profile" className="github-avatar" />
              <p>View profile</p>
            </a>
          </li>
          <li className="project">
            <Link to="/design/panduit">
              <img src={logoPanduit} alt="Panduit" className="project-logo" />
              <h4>Modernizing a legacy distributor portal</h4>
              <p className="project-description">Led a full UX re-architecture of a decades-old enterprise system, improving usability, reducing error rates, and aligning with modern platform constraints.</p>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default Home
