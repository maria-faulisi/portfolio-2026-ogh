import dsPanduitHero from '../assets/ds-panduit-hero.png'

const DesignSystemsPanduit = () => {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="eyebrow">Case Study</p>
        <h1>Panduit AEM Design System</h1>
        <p className="subtitle">Aligning competing priorities through a shared design system.</p>
        <dl className="meta">
          <dt>Role</dt>
          <dd>Lead UX / System Contributor</dd>
          <dt>Platform</dt>
          <dd>AEM Platform</dd>
        </dl>
      </header>

      <img src={dsPanduitHero} alt="Panduit AEM Design System" className="case-study-hero" />

      <section className="metrics">
        <ul>
          <li><strong>30–40%</strong> Faster page builds for content authors</li>
          <li><strong>50%</strong> Less redundant code across business units</li>
          <li><strong>70%</strong> Fewer accessibility issues in new pages</li>
          <li><strong>3×</strong> Component adoption</li>
        </ul>
      </section>

      <section>
        <h2>The Challenge</h2>
        <h3>Panduit's digital landscape wasn't just fragmented, it was political.</h3>
        <p>
          Every business unit owned its own microsite and used that ownership as leverage in
          broader internal negotiations. Introducing a shared system meant asking teams to give
          up control they'd fought to keep.
        </p>
        <ul>
          <li>Serve global teams with different languages and priorities</li>
          <li>Support non-technical content authors</li>
          <li>Reduce inconsistency and internal conflict</li>
        </ul>
      </section>

      <section>
        <h2>The Approach</h2>
        <ol>
          <li>Introduced atomic design taxonomy to neutralize politics</li>
          <li>Built accessible, modular AEM components</li>
          <li>Trained non-technical content authors</li>
          <li>Served as interim product owner</li>
        </ol>
      </section>

      <section>
        <h2>Key Learnings</h2>
        <ul>
          <li>"Design systems often start as alignment work, not interface work."</li>
          <li>"Reducing rework by clarifying contracts between design, handoff, and implementation."</li>
          <li>"A system succeeds when non-technical authors can't break it."</li>
        </ul>
      </section>
    </article>
  )
}

export default DesignSystemsPanduit
