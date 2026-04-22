import dsHarvestHero from '../assets/ds-harvest-hero.png'

const DesignSystemsHarvest = () => {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="eyebrow">Case Study</p>
        <h1>Harvest Porchlight Design System</h1>
        <p className="subtitle">Clarifying a design system across multiple implementation paths.</p>
        <dl className="meta">
          <dt>Role</dt>
          <dd>Software Engineer II</dd>
          <dt>Platform</dt>
          <dd>Rails + React</dd>
        </dl>
      </header>

      <img src={dsHarvestHero} alt="Harvest Porchlight Design System" className="case-study-hero" />

      <section className="metrics">
        <ul>
          <li><strong>~30%</strong> Faster engineer onboarding (Rails vs. React guidance)</li>
          <li><strong>50%</strong> Drop in confusion — eliminated guesswork between stacks</li>
          <li><strong>40%+</strong> Increase in adoption</li>
          <li><strong>60%</strong> Reduction in support requests</li>
        </ul>
      </section>

      <section>
        <h2>The Challenge</h2>
        <h3>Porchlight wasn't just unclear, it was structurally confusing.</h3>
        <p>
          Engineers navigated two different implementation paths — Rails with class-based styling
          and React with encapsulated components — but documentation mixed both without clarifying
          which applied where. This caused misinterpretation, inconsistent UI behavior, and
          constant team clarifications.
        </p>
        <ul>
          <li>Cleanly separate Rails styling rules from React component APIs</li>
          <li>Support different engineering expertise levels</li>
          <li>Reduce inconsistent implementations through clear boundaries</li>
        </ul>
      </section>

      <section>
        <h2>The Approach</h2>
        <ol>
          <li>
            <strong>Dual-stack audit</strong> — reviewed Rails partials, React components, and
            documentation for naming mismatches and inconsistencies
          </li>
          <li>
            <strong>Split &amp; restructure documentation</strong> — redesigned docs into Rails
            and React tracks for clarity
          </li>
          <li>
            <strong>Interactive examples &amp; prop tables</strong> — added live variations and
            prop documentation for React
          </li>
          <li>
            <strong>Cross-team alignment</strong> — partnered with stakeholders to establish
            unified standards
          </li>
          <li>
            <strong>Storybook modernization</strong> — updated code and coordinated documentation
            evolution
          </li>
        </ol>
      </section>

      <section>
        <h2>Key Learnings</h2>
        <ul>
          <li>"Clear boundaries are essential in dual-stack systems."</li>
          <li>"Documentation is a product and it needs product thinking."</li>
          <li>"Consistency improves fastest when cognitive load decreases."</li>
        </ul>
      </section>
    </article>
  )
}

export default DesignSystemsHarvest
