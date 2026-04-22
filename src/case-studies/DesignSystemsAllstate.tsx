import dsAllstateHero from '../assets/ds-allstate-hero.png'
import dsAllstateDiagram from '../assets/ds-allstate-diagram.svg'
import dsAllstateIcon from '../assets/ds-allstate-icon.svg'
import dsAllstateChart from '../assets/ds-allstate-chart.svg'

const DesignSystemsAllstate = () => {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="eyebrow">Case Study</p>
        <h1>Allstate Mesh Design System</h1>
        <p className="subtitle">Reducing system drift in a multi-tool enterprise environment.</p>
        <dl className="meta">
          <dt>Role</dt>
          <dd>UX Architect &amp; Front-End Engineer</dd>
          <dt>Platform</dt>
          <dd>Multi-tool System</dd>
        </dl>
      </header>

      <img src={dsAllstateHero} alt="Allstate Mesh Design System" className="case-study-hero" />

      <section className="metrics">
        <ul>
          <li><strong>~90%</strong> Sketch-code parity (up from ~60%)</li>
          <li><strong>25%</strong> Reduction in rework in design-to-dev cycles</li>
          <li><strong>40+</strong> Teams united across product lines</li>
          <li><strong>100%</strong> Accessibility capable in all shared components</li>
        </ul>
      </section>

      <section>
        <h2>The Challenge</h2>
        <blockquote>
          "Teams spent hours reconciling inconsistencies instead of building new features."
        </blockquote>
        <p>
          Allstate's enterprise design system was fragmented across three tools that drifted out
          of sync over time, causing inconsistencies in component names, spacing tokens, and
          accessibility specifications.
        </p>
        <ul className="tool-cards">
          <li className="tool-card">
            <img src={dsAllstateDiagram} alt="Sketch" />
            <h4>Sketch for design</h4>
            <p>Out of date library components or bespoke designs used for feature development.</p>
          </li>
          <li className="tool-card">
            <img src={dsAllstateIcon} alt="Zeplin" />
            <h4>Zeplin for handoff</h4>
            <p>Sketch affected Zeplin's validity when designers neglected to ensure compliance.</p>
          </li>
          <li className="tool-card">
            <img src={dsAllstateChart} alt="Styleguidist" />
            <h4>Styleguidist for React Components</h4>
            <p>Designers didn't use Styleguidist to confirm compliance so engineers assumed rework was required.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>The Approach</h2>
        <ol>
          <li>Cross-tool audit documenting discrepancies</li>
          <li>Modernize &amp; refactor — migration from SASS to Emotion.js</li>
          <li>Documentation &amp; governance clarification</li>
          <li>Sketch automation script development for compliance flagging</li>
          <li>Research support — translating components into Axure RP Library</li>
        </ol>
      </section>

      <section>
        <h2>Key Learnings</h2>
        <ul>
          <li>"Real parity requires auditing the spaces between tools, design, handoff and code."</li>
          <li>"Governance works when it's simple enough that everyone participates."</li>
          <li>"A design system is only as valuable as its adoption by design, research, and engineering alike."</li>
        </ul>
      </section>
    </article>
  )
}

export default DesignSystemsAllstate
