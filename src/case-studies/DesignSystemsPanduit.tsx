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
        <p>Panduit's digital landscape wasn't just fragmented, it was political.</p>
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
    </article>
  )
}

export default DesignSystemsPanduit
