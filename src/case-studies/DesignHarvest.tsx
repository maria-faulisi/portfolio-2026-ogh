const DesignHarvest = () => {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="eyebrow">Case Study</p>
        <h1>Harvest</h1>
        <p className="subtitle">Identifying Structural Duplication Across Reporting Workflows</p>
        <dl className="meta">
          <dt>Role</dt>
          <dd>Product-minded Engineer</dd>
          <dt>Industry</dt>
          <dd>SaaS</dd>
        </dl>
      </header>

      <section className="tldr">
        <h2>TL;DR</h2>
        <dl>
          <dt>Problem</dt>
          <dd>"Reporting features evolved as separate workflows, creating duplicated setup and confusion."</dd>
          <dt>Insight</dt>
          <dd>"Saving and scheduling reflected the same user intent but were modeled independently."</dd>
          <dt>Outcome</dt>
          <dd>"Unified the workflow, reduced rework, and shipped without increasing scope."</dd>
        </dl>
      </section>

      <section>
        <h2>The Problem</h2>
        <p>
          Incremental reporting expansion added a saved report capability and later a recurring
          export milestone. Pressure to deliver quickly led to treating recurring exports as a
          separate flow.
        </p>
        <ul>
          <li>Duplicated setup for users requiring multiple configurations</li>
          <li>Parallel logic duplicating behavior across separate paths</li>
          <li>Inconsistent user expectations</li>
        </ul>
        <blockquote>
          "Recreating the saved report experience without re-evaluating the underlying user task
          broke the mental model."
        </blockquote>
        <p>
          Initial design showed parallel flows: Run Report → Save Report → Saved Report List
          and Run Report → Create Recurring Report → Recurring Report List.
        </p>
      </section>

      <section>
        <h2>Constraints</h2>
        <ul>
          <li>Fixed delivery timeline</li>
          <li>Recent rollout issues limiting capacity</li>
          <li>Existing saved report modal in production</li>
          <li>Backwards compatibility requirements</li>
        </ul>
      </section>

      <section>
        <h2>The Insight</h2>
        <blockquote>
          "Saving and scheduling are the same intent: define a report once, then choose how
          it's delivered."
        </blockquote>
      </section>

      <section>
        <h2>The Proposal</h2>
        <dl>
          <dt>Before</dt>
          <dd>Parallel flows requiring separate setup and logic.</dd>
          <dt>After</dt>
          <dd>Run Report → Save Report with Recurring Options → Saved Report Edit Recurring</dd>
        </dl>
      </section>

      <section>
        <h2>Collaboration</h2>
        <p>
          Role was software engineer; decision point involved user workflow scaling and codebase
          management.
        </p>
        <ul>
          <li>Framed issues through user mental models</li>
          <li>Demonstrated compounding configuration problems</li>
          <li>Proposed scope-reducing solutions</li>
        </ul>
      </section>

      <section className="metrics">
        <h2>Impact</h2>
        <ul>
          <li>Users defined reports once, reusable across saving and scheduling</li>
          <li>Engineering avoided maintaining duplicate logic</li>
          <li>Team delivered on schedule without a second system</li>
        </ul>
      </section>

      <section>
        <h2>Reflection</h2>
        <blockquote>
          "A hybrid background brings a responsibility to speak up, contribute thoughtfully,
          and help teams move forward."
        </blockquote>
        <p>
          Key philosophy: operate from a shared goals mindset where ideas surface early and
          teams move together.
        </p>
      </section>
    </article>
  )
}

export default DesignHarvest
