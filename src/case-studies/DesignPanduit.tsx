const DesignPanduit = () => {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="eyebrow">Case Study</p>
        <h1>Panduit</h1>
        <p className="subtitle">Modernizing a Legacy Distributor Portal Within Fixed APIs</p>
        <dl className="meta">
          <dt>Role</dt>
          <dd>Lead UX Designer</dd>
          <dt>Industry</dt>
          <dd>Enterprise B2B Portal</dd>
        </dl>
      </header>

      <section className="tldr">
        <h2>TL;DR</h2>
        <dl>
          <dt>Problem</dt>
          <dd>Aging portal required modernization despite frozen APIs and tight deadlines.</dd>
          <dt>Insight</dt>
          <dd>"API behavior isn't a constraint to work around, it's the system you're designing."</dd>
          <dt>Outcome</dt>
          <dd>Launched on schedule without backend modifications. Component patterns mitigated risk and expedited future development.</dd>
        </dl>
      </section>

      <section>
        <h2>The Problem</h2>
        <p>
          The portal's frontend relied on early web patterns spanning over 20 years. Though
          fundamentally operational, it increasingly diverged from contemporary enterprise tool
          expectations.
        </p>
        <ul>
          <li>
            <strong>Unclear validation and error prevention</strong> — users made preventable
            errors because validation feedback misaligned with actual backend rules. Error
            messaging occurred post-submission rather than during data entry.
          </li>
          <li>
            <strong>Inconsistent system status visibility</strong> — progress tracking was vague
            or missing. Unconfirmed actions left users uncertain about completion.
          </li>
          <li>
            <strong>Inefficient task flows</strong> — navigation structured around internal data
            architecture rather than user objectives, requiring extra steps and cognitive load.
          </li>
        </ul>
      </section>

      <section>
        <h2>Constraints</h2>
        <ul>
          <li>Fixed APIs and data models</li>
          <li>Concurrent platform initiatives</li>
          <li>Compressed timeline</li>
          <li>Legacy-trained user base</li>
        </ul>
      </section>

      <section>
        <h2>The Insight</h2>
        <blockquote>
          "API behavior and edge cases represent the system being designed."
        </blockquote>
      </section>

      <section>
        <h2>My Approach</h2>
        <dl>
          <dt>Design From Technical Reality</dt>
          <dd>
            Collaborate with engineering to document API behavior, validation protocols, and
            exceptions beforehand. Backend limitations transform into design specifications.
          </dd>
          <dt>Components Encode Constraints</dt>
          <dd>
            Establish patterns where validation aligns with backend rules, error states mirror
            actual system issues, and loading reflects API responses.
          </dd>
          <dt>IA That Leverages Endpoints</dt>
          <dd>
            Reorganize navigation around user objectives using current API infrastructure.
            Identical backend, optimized coordination.
          </dd>
          <dt>Strategic Prioritization</dt>
          <dd>
            Emphasize enhancements leveraging existing backend functionality. Achieve UX
            improvements without technical liability or implementation complexity.
          </dd>
          <dt>Validation Within Constraints</dt>
          <dd>
            Investigation confirming both user advantages and technical viability. Implement
            valuable, shippable solutions.
          </dd>
          <dt>Scalable Collaboration</dt>
          <dd>
            Establish component frameworks and transfer procedures minimizing continuous
            management. Create reusable foundations for teams.
          </dd>
        </dl>
      </section>

      <section className="metrics">
        <h2>Impact</h2>
        <h3>Delivered on time without backend rewrites</h3>
        <p>
          The constraint-centered strategy eliminated rework patterns common in enterprise
          overhauls. Engineering executed confidently because designs mirrored genuine system
          operation.
        </p>
        <h3>Component patterns accelerated subsequent features</h3>
        <p>
          The design vocabulary unified design and engineering teams. Error management shifted
          from reactive to anticipatory. Edge cases received attention during design phases
          rather than in live environments.
        </p>
        <h3>Users responded positively</h3>
        <p>
          The modernized portal reflected current expectations while preserving operational
          dependability.
        </p>
      </section>

      <section>
        <h2>Reflection</h2>
        <p>
          Substantial improvements don't demand complete rebuilds; they demand designing aligned
          with technical actuality. Initial engineering partnership avoids costly
          "aesthetically appealing but technically impossible" scenarios that undermine timelines.
        </p>
        <p>
          For multidisciplinary roles, this represents essential capability: constructing systems
          balancing usability with buildability through treating limitations as design factors,
          not barriers.
        </p>
      </section>
    </article>
  )
}

export default DesignPanduit
