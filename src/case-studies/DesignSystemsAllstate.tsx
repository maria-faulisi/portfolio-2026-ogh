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
        <h2>Reducing system drift in a multi-tool enterprise environment.</h2>
        <p>Role: UX Architect &amp; Front-End Engineer</p>
        <p>Platform: Multi-tool System</p>
      </header>

      <img src={dsAllstateHero} alt="Allstate Mesh Design System" className="case-study-hero" />

      <section className="metrics">
        <ul>
          <li>
            <strong>~90%</strong>
            <span>Sketch-code Parity</span>
            <span>Up from ~60%</span>
          </li>
          <li>
            <strong>25%</strong>
            <span>Reduction in Rework</span>
            <span>Design-to-dev cycles</span>
          </li>
          <li>
            <strong>40+</strong>
            <span>Teams United</span>
            <span>Across product lines</span>
          </li>
          <li>
            <strong>100%</strong>
            <span>Accessibility Capable</span>
            <span>All shared components</span>
          </li>
        </ul>
      </section>

      <section>
        <h2>The Challenge</h2>
        <h1>Teams spent hours reconciling inconsistencies instead of building new features.</h1>
        <p>
          Allstate's enterprise design system—was fragmented across three tools. Over time, each
          had drifted out of sync. Component names, spacing tokens, and accessibility specs varied
          between environments. Designers referenced outdated Zeplin exports; engineers built
          components that no longer matched the library.
        </p>
        <ul className="tool-cards">
          <li className="tool-card">
            <img src={dsAllstateDiagram} alt="" />
            <h4>Sketch for design</h4>
            <p>Out of date library components or bespoke designs used for feature development.</p>
          </li>
          <li className="tool-card">
            <img src={dsAllstateIcon} alt="" />
            <h4>Zeplin for handoff</h4>
            <p>Sketch affected Zeplin's validity when designers neglected to ensure compliance.</p>
          </li>
          <li className="tool-card">
            <img src={dsAllstateChart} alt="" />
            <h4>Styleguidist for React Components</h4>
            <p>Designers didn't use Styleguidist to confirm compliance so engineers assumed rework was required.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>The Approach</h2>
        <ol>
          <li>
            <h4>Cross-tool audit</h4>
            <p>The audit found discrepancies in naming, sizing, and behavior, which I documented in a shared document for design and engineering leads.</p>
          </li>
          <li>
            <h4>Modernize &amp; Refactor</h4>
            <p>I worked on migration from legacy SASS to Emotion.js, enabling token-based theming, improved accessibility, and consistent responsiveness across breakpoints.</p>
          </li>
          <li>
            <h4>Documentation &amp; Governance</h4>
            <p>I clarified Styleguidist documentation on props, states, and accessibility expectations, and partnered with design leadership to create lightweight contribution guidelines.</p>
          </li>
          <li>
            <h4>Sketch automation script</h4>
            <p>I built a Sketch automation script that flagged non-compliant components and missing tokens. Designers could self-validate before handoff, minimizing QA churn downstream.</p>
          </li>
          <li>
            <h4>Research Support</h4>
            <p>I translated Mesh components into an Axure RP Library, giving UX researchers testable prototypes that matched production behavior. Findings fed directly back into Mesh updates.</p>
          </li>
        </ol>
      </section>

      <section>
        <h2>Key Learnings</h2>
        <ul>
          <li>Real parity requires auditing the spaces between tools, design, handoff and code.</li>
          <li>Governance works when it's simple enough that everyone participates.</li>
          <li>A design system is only as valuable as its adoption by design, research, and engineering alike.</li>
        </ul>
      </section>
    </article>
  )
}

export default DesignSystemsAllstate
