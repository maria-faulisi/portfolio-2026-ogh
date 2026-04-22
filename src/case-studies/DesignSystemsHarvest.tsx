import dsHarvestHero from '../assets/ds-harvest-hero.png'

const DesignSystemsHarvest = () => {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="eyebrow">Case Study</p>
        <h1>Harvest Porchlight Design System</h1>
        <h2>Clarifying a design system across multiple implementation paths.</h2>
        <p>Role: Software Engineer II</p>
        <p>Platform: AEM app (enterprise portal)</p>
      </header>

      <img src={dsHarvestHero} alt="Harvest Porchlight Design System" className="case-study-hero" />

      <section className="metrics">
        <ul>
          <li>
            <strong>~30%</strong>
            <span>Faster Engineer Onboarding</span>
            <span>Rails vs. React guidance</span>
          </li>
          <li>
            <strong>50%</strong>
            <span>Drop in Confusion</span>
            <span>Eliminated guesswork between stacks</span>
          </li>
          <li>
            <strong>40%+</strong>
            <span>Increase in Adoption</span>
            <span>Teams relied on the system</span>
          </li>
          <li>
            <strong>60%</strong>
            <span>Reduction in Support Requests</span>
            <span>Better examples</span>
          </li>
        </ul>
      </section>

      <section>
        <h2>The Challenge</h2>
        <h1>Porchlight wasn't just unclear, it was structurally confusing.</h1>
        <p>
          Engineers had to navigate two completely different implementation paths, Rails with
          class-based styling and React with encapsulated components, but the documentation mixed
          both together without signaling which guidance applied to which stack. This created
          widespread misinterpretation, inconsistent UI behavior, and constant back-and-forth
          clarification between teams.
        </p>
        <ul className="goal-cards">
          <li className="goal-card">
            <h4>Clarify mixed-stack guidance</h4>
            <p>Cleanly separate Rails styling rules from React component APIs.</p>
          </li>
          <li className="goal-card">
            <h4>Support different levels of engineering expertise</h4>
            <p>Front-end specialists and backend-focused Rails developers needed guidance tailored for their workflows.</p>
          </li>
          <li className="goal-card">
            <h4>Reduce inconsistent implementations</h4>
            <p>Defining clear boundaries, expected behaviors, and usage patterns.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>The Approach</h2>
        <ol>
          <li>
            <h4>Dual-stack Audit</h4>
            <p>I reviewed every Rails partial, React component, and Porchlight doc page to map naming mismatches, prop differences, styling inconsistencies and missing guidance.</p>
          </li>
          <li>
            <h4>Split &amp; Re-structure Documentation</h4>
            <p>I redesigned Porchlight docs into two clearly marked tracks, Rails and React, so developers instantly understood which guidance applied to their implementation.</p>
          </li>
          <li>
            <h4>Interactive Examples &amp; Prop Tables</h4>
            <p>I added live component variations, usage notes, and prop tables for React so engineers could experiment safely and adopt patterns consistently.</p>
          </li>
          <li>
            <h4>Cross-team Alignment</h4>
            <p>I partnered with backend, product, and design stakeholders to ensure both stacks reflected the same UX intentions and to establish a single, unified source of truth.</p>
          </li>
          <li>
            <h4>Storybook Modernization &amp; Backlog Creation</h4>
            <p>I updated Storybook code, collaborated with another engineer to define clear documentation, update backlog, and coordinated assignments so code and docs evolved together.</p>
          </li>
        </ol>
      </section>

      <section>
        <h2>Key Learnings</h2>
        <ul>
          <li>Clear boundaries are essential in dual-stack systems.</li>
          <li>Documentation is a product and it needs product thinking.</li>
          <li>Consistency improves fastest when cognitive load decreases.</li>
        </ul>
      </section>
    </article>
  )
}

export default DesignSystemsHarvest
