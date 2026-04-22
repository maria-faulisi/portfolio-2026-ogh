import dsPanduitHero from '../assets/ds-panduit-hero.png'

const DesignSystemsPanduit = () => {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="eyebrow">Case Study</p>
        <h1>Panduit AEM Design System</h1>
        <h2>Aligning competing priorities through a shared design system.</h2>
        <p>Role: Lead UX/ System contributor</p>
        <p>Platform: AEM Platform</p>
      </header>

      <img src={dsPanduitHero} alt="Panduit AEM Design System" className="case-study-hero" />

      <section className="metrics">
        <ul>
          <li>
            <strong>30-40%</strong>
            <span>Faster Page Builds</span>
            <span>For content authors</span>
          </li>
          <li>
            <strong>50%</strong>
            <span>Less Redundant Code</span>
            <span>Across business units</span>
          </li>
          <li>
            <strong>70%</strong>
            <span>Fewer A11y Issues</span>
            <span>in new pages</span>
          </li>
          <li>
            <strong>3X</strong>
            <span>Component Adoption</span>
            <span>Usage increased</span>
          </li>
        </ul>
      </section>

      <section>
        <h2>The Challenge</h2>
        <h1>Panduit's digital landscape wasn't just fragmented, it was political.</h1>
        <p>
          Every business unit owned its own microsite and used that ownership as leverage in
          broader internal turf-battles. This resulted in mismatched UX, duplicated code,
          competing branding, and nearly zero shared standards. At the same time, the company
          was rolling out a new AEM stack that needed a unified atomic design system
        </p>
        <ul className="goal-cards">
          <li className="goal-card">
            <h4>Serve global teams</h4>
            <p>Support regions with different languages, content demands, and marketing priorities.</p>
          </li>
          <li className="goal-card">
            <h4>Support for non-technical content authors</h4>
            <p>Build components so marketers and regional teams could publish pages without engineering help.</p>
          </li>
          <li className="goal-card">
            <h4>Reduce both inconsistency and internal conflict</h4>
            <p>Eliminate design drift and defused the political turf battles that slowed digital work down.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2>The Approach</h2>
        <ol>
          <li>
            <h4>Introduced atomic design taxonomy to neutralize politics</h4>
            <p>Chose atomic design (atoms, molecules, organisms) deliberately. The terminology was neutral, didn't favor marketing over sales or engineering over design. Made it a shared toolkit, not a mandate.</p>
          </li>
          <li>
            <h4>Built accessible, modular AEM components</h4>
            <p>Designed and developed reusable components for diverse use cases: marketing pages, product specs, lead-gen forms, support docs. Every component WCAG 2.1 AA compliant from day one.</p>
          </li>
          <li>
            <h4>Trained non-technical content authors</h4>
            <p>Most people building pages weren't designers or engineers, they were content authors. Created training materials, ran workshops, built documentation written for non-technical users.</p>
          </li>
          <li>
            <h4>Served as interim product owner</h4>
            <p>For six months, ran standups, managed backlog, facilitated conversations between business units. Used the role to build relationships, surface shared needs, and turn competing priorities into a unified roadmap.</p>
          </li>
        </ol>
      </section>

      <section>
        <h2>Key Learnings</h2>
        <ul>
          <li>Design systems often start as alignment work, not interface work.</li>
          <li>Reducing rework by clarifying contracts between design, handoff, and implementation.</li>
          <li>A system succeeds when non-technical authors can't break it.</li>
        </ul>
      </section>

      <section>
        <h3>System in Use</h3>
        <p>Selected screens showing how the system supported real product work.</p>
        <p><a href="#">View Panduit Screens</a></p>
      </section>
    </article>
  )
}

export default DesignSystemsPanduit
