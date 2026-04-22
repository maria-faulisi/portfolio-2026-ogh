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
        <ul>
          <li>Sketch for design</li>
          <li>Zeplin for handoff</li>
          <li>Styleguidist for React components</li>
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
