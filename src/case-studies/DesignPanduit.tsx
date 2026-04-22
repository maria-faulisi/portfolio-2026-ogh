import designMockup from '../assets/design-mockup.png'
import designPanduit01 from '../assets/design-panduit-01.jpg'
import designPanduitScreens from '../assets/design-panduit-screens.png'
import designPanduit02 from '../assets/design-panduit-02.png'

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

      <img src={designPanduit01} alt="Panduit distributor portal" className="case-study-hero" />

      <section className="tldr">
        <h2>TL;DR</h2>
        <dl>
          <dt>Problem</dt>
          <dd>Aging portal required modernization despite frozen APIs and tight deadlines.</dd>
          <dt>Insight</dt>
          <dd>API behavior isn't a constraint to work around, it's the system you're designing.</dd>
          <dt>Outcome</dt>
          <dd>Launched on schedule without backend modifications. Component patterns mitigated risk and expedited future development.</dd>
        </dl>
      </section>

      <img src={designMockup} alt="" className="case-study-mockup" />

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
            errors because validation feedback misaligned with actual backend rules.
          </li>
          <li>
            <strong>Inconsistent system status visibility</strong> — progress tracking was vague
            or missing. Silent failures left users uncertain about completion.
          </li>
          <li>
            <strong>Inefficient task flows</strong> — navigation structured around internal data
            architecture rather than user objectives.
          </li>
        </ul>

        <img src={designPanduitScreens} alt="Legacy portal screens" className="case-study-screens" />
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
          "API behavior and edge cases are the system you're designing."
        </blockquote>
      </section>

      <section>
        <h2>The Solution</h2>
        <p>
          Modernized the portal experience within existing technical infrastructure — task-based
          navigation, real-time validation, and component patterns that encoded API constraints.
        </p>

        <div className="solution-screens">
          <img src={designPanduit01} alt="Modernized portal screens" />
          <img src={designPanduit02} alt="Modernized portal detail" />
        </div>
      </section>

      <section>
        <h2>My Approach</h2>
        <dl>
          <dt>Design From Technical Reality</dt>
          <dd>
            Partner with engineering to map API behavior, validation rules, and edge cases upfront.
            Backend constraints become design specifications.
          </dd>
          <dt>Components Encode Constraints</dt>
          <dd>
            Design patterns where validation matches backend rules, error states reflect actual
            failures, and loading reflects API responses.
          </dd>
          <dt>IA That Leverages Endpoints</dt>
          <dd>
            Reorganize navigation around user tasks using existing API calls. Same backend, smarter
            orchestration.
          </dd>
          <dt>Strategic Prioritization</dt>
          <dd>
            Prioritize improvements that reuse backend behavior. Deliver UX gains without technical
            debt or implementation complexity.
          </dd>
          <dt>Validation Within Constraints</dt>
          <dd>
            Research that validates both user value and technical feasibility. Build what matters
            and what ships.
          </dd>
          <dt>Scalable Collaboration</dt>
          <dd>
            Build component patterns and handoff processes that reduce ongoing oversight. Establish
            foundations for teams.
          </dd>
        </dl>
      </section>

      <section className="metrics">
        <h2>Impact</h2>
        <h3>Delivered on time without backend rewrites</h3>
        <p>
          The constraint-first approach eliminated the rework cycles that typically plague
          enterprise redesigns.
        </p>
        <h3>Component patterns accelerated subsequent features</h3>
        <p>
          The design system created a shared vocabulary between design and engineering. Error
          handling became anticipatory rather than reactive.
        </p>
        <h3>Users responded positively</h3>
        <p>
          Customer feedback indicated they "loved" the modernized experience. The updated portal
          aligned with contemporary enterprise tool expectations.
        </p>
      </section>

      <section>
        <h2>Reflection</h2>
        <p>
          Meaningful improvements don't require rewrites — they require designing from technical
          reality. Early engineering partnership avoids costly "aesthetically appealing but
          technically impossible" scenarios.
        </p>
        <p>
          For hybrid roles, this is the core competency: making systems both more usable and more
          buildable by treating limitations as design factors, not barriers.
        </p>
      </section>
    </article>
  )
}

export default DesignPanduit
