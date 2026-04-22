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
        <h2>Modernizing a Legacy Distributor Portal Within Fixed APIs</h2>
        <p>Role: Lead UX Designer</p>
        <p>Industry: Enterprise B2B Portal</p>
      </header>

      <img src={designPanduit01} alt="Panduit distributor portal" className="case-study-hero" />

      <section className="tldr">
        <h3>TL;DR</h3>
        <dl>
          <dt>Problem:</dt>
          <dd>Legacy portal needed modernization with frozen APIs and compressed timeline.</dd>
          <dt>Insight:</dt>
          <dd>API behavior isn't a constraint to work around, it's the system you're designing.</dd>
          <dt>Outcome:</dt>
          <dd>Delivered on time without backend changes. Component patterns reduced risk and accelerated future features.</dd>
        </dl>
      </section>

      <img src={designMockup} alt="" className="case-study-mockup" />

      <section>
        <h2>The Problem</h2>
        <p>
          The portal's frontend dated back to early web patterns, over 20 years old.
          Fundamentally functional, but increasingly misaligned with how users now expect
          enterprise tools to behave. The dated interaction patterns created occasional confusion
          and cognitive overhead.
        </p>
        <p>This resulted in:</p>
        <ul>
          <li>
            <strong>Unclear validation and error prevention</strong> — Users encountered
            preventable mistakes because validation feedback didn't match actual backend rules.
            Error messages appeared after submission rather than during input.
          </li>
          <li>
            <strong>Inconsistent system status visibility</strong> — Progress indicators were
            unclear or absent. Silent failures left users uncertain whether actions had succeeded.
          </li>
          <li>
            <strong>Inefficient task flows</strong> — Navigation was organized around internal
            data structures rather than user tasks, requiring unnecessary steps and cognitive
            overhead.
          </li>
        </ul>

        <img src={designPanduitScreens} alt="Legacy portal screens" className="case-study-screens" />
      </section>

      <section>
        <h2>Constraints</h2>
        <h4>Any solution had to consider:</h4>
        <ul>
          <li>Fixed APIs and data models</li>
          <li>Parallel platform work</li>
          <li>Compressed timeline</li>
          <li>Legacy-trained users</li>
        </ul>
      </section>

      <section>
        <h2>The Insight</h2>
        <h1>API behavior and edge cases are the system you're designing.</h1>
      </section>

      <section>
        <h2>The Solution</h2>
        <p>
          Modernized the portal experience within existing technical infrastructure. Task-based
          navigation, reusable components, and predictable patterns replaced dated workflows—all
          without touching backend APIs.
        </p>
        <img src={designPanduit01} alt="Modernized portal screens" />
        <img src={designPanduit02} alt="Modernized portal detail" />
      </section>

      <section>
        <h2>My Approach</h2>
        <dl>
          <dt>Design From Technical Reality</dt>
          <dd>Partner with engineering to map API behavior, validation rules, and edge cases upfront. Backend constraints become design requirements.</dd>
          <dt>Components Encode Constraints</dt>
          <dd>Design patterns where validation matches backend rules, error states reflect actual failures, and loading follows API responses.</dd>
          <dt>IA That Leverages Endpoints</dt>
          <dd>Reorganize navigation around user tasks using existing API calls. Same backend, smarter orchestration.</dd>
          <dt>Strategic Prioritization</dt>
          <dd>Prioritize improvements that reuse backend behavior. Deliver UX gains without technical debt or implementation risk.</dd>
          <dt>Validation Within Constraints</dt>
          <dd>Research that validates both user value and technical feasibility. Build what matters and what ships.</dd>
          <dt>Scalable Collaboration</dt>
          <dd>Build component patterns and handoff processes that reduce ongoing oversight. Establish foundations others can build on.</dd>
        </dl>
      </section>

      <section className="metrics">
        <h2>Impact</h2>
        <p>Delivered on time without backend rewrites</p>
        <p>The constraint-first approach eliminated the rework cycles that typically plague enterprise redesigns. Engineering implemented with confidence because designs reflected actual system behavior.</p>
        <p>Component patterns accelerated subsequent features</p>
        <p>The design system created a shared vocabulary between design and engineering. Error handling became proactive rather than reactive. Edge cases were addressed during design, not discovered in production</p>
        <p>Users responded positively</p>
        <p>Customer feedback indicated they "loved" the modernized experience. The updated portal aligned with current expectations while maintaining the reliability users depended on.</p>
      </section>

      <section>
        <h2>Reflection</h2>
        <p>
          Meaningful improvements don't require rewrites, they require designing from technical
          reality. Early partnership with engineering prevents the costly "looks great but we
          can't build it" cycles that derail projects.
        </p>
        <p>
          For hybrid roles, this is the core competency: making systems both more usable and more
          buildable by treating constraints as design inputs, not obstacles.
        </p>
      </section>

      <section>
        <h3>System in Use</h3>
        <p>Selected screens showing how the system supported real product work.</p>
        <p><a href="#">View Panduit Screens</a></p>
      </section>
    </article>
  )
}

export default DesignPanduit
