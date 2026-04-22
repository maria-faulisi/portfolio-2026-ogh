import designMockup from '../assets/design-mockup.png'
import designHarvest01 from '../assets/design-harvest-01.jpg'
import designHarvest02 from '../assets/design-harvest-02.jpg'
import designHarvest03 from '../assets/design-harvest-03.jpg'
import designHarvest04 from '../assets/design-harvest-04.jpg'
import designHarvest05 from '../assets/design-harvest-05.jpg'
import designHarvest06 from '../assets/design-harvest-06.jpg'
import designHarvest07 from '../assets/design-harvest-07.jpg'
import designHarvest08 from '../assets/design-harvest-08.jpg'

const DesignHarvest = () => {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="eyebrow">Case Study</p>
        <h1>Harvest</h1>
        <h2>Identifying Structural Duplication Across Reporting Workflows</h2>
        <p>Role: Product-minded Engineer</p>
        <p>Industry: SaaS</p>
      </header>

      <img src={designHarvest01} alt="Harvest reporting workflow" className="case-study-hero" />

      <section className="tldr">
        <h3>TL;DR</h3>
        <dl>
          <dt>Problem:</dt>
          <dd>Reporting features evolved as separate workflows, creating duplicated setup and confusion.</dd>
          <dt>Insight:</dt>
          <dd>Saving and scheduling reflected the same user intent but were modeled independently.</dd>
          <dt>Outcome:</dt>
          <dd>Unified the workflow, reduced rework, and shipped without increasing scope.</dd>
        </dl>
      </section>

      <img src={designMockup} alt="" className="case-study-mockup" />

      <section>
        <h2>The Problem</h2>
        <p>
          Reporting was expanding incrementally. A "saved report" capability had recently shipped,
          and the next milestone was to add recurring exports that would email users and store
          exported reports in Harvest. Delivery pressure was high, and engineering capacity was
          split between new feature work and addressing issues discovered during the initial
          rollout. To move quickly, the initial direction treated recurring exports as a separate
          flow that closely mirrored the saved report experience, with an additional configuration
          step layered on top.
        </p>
        <p>This resulted in:</p>
        <ul>
          <li>
            <strong>Duplicated setup for users</strong> — The same report configuration had to be
            defined more than once to save and schedule it.
          </li>
          <li>
            <strong>Parallel logic for engineering</strong> — Nearly identical behavior was
            implemented and maintained in separate paths.
          </li>
          <li>
            <strong>Inconsistent expectations</strong> — Users were forced to understand internal
            distinctions that didn't map to how they thought about reporting.
          </li>
        </ul>
        <p>
          Key insight: Recreating the saved report experience without re-evaluating the underlying
          user task broke the mental model and compounded work for both users and engineering.
        </p>

        <h4>Initial design: parallel flows</h4>
        <div className="flow-comparison">
          <div className="flow-column">
            <figure>
              <figcaption>Run Report</figcaption>
              <img src={designHarvest01} alt="Run Report screen" />
            </figure>
            <figure>
              <figcaption>Save Report</figcaption>
              <img src={designHarvest02} alt="Save Report screen" />
            </figure>
            <figure>
              <figcaption>Saved Report List</figcaption>
              <img src={designHarvest03} alt="Saved Report List screen" />
            </figure>
          </div>
          <div className="flow-column">
            <figure>
              <figcaption>Run Report</figcaption>
              <img src={designHarvest01} alt="Run Report screen" />
            </figure>
            <figure>
              <figcaption>Create Recurring Report</figcaption>
              <img src={designHarvest04} alt="Create Recurring Report screen" />
            </figure>
            <figure>
              <figcaption>Recurring Report List</figcaption>
              <img src={designHarvest05} alt="Recurring Report List screen" />
            </figure>
          </div>
        </div>
      </section>

      <section>
        <h2>Constraints</h2>
        <h4>Any solution had to consider:</h4>
        <ul>
          <li>Fixed delivery timeline</li>
          <li>Recent rollout issues limited capacity</li>
          <li>Existing saved report modal in production</li>
          <li>Backwards compatibility for saved reports</li>
        </ul>
      </section>

      <section>
        <h2>The Insight</h2>
        <h1>Saving and scheduling are the same intent: define a report once, then choose how it's delivered.</h1>
      </section>

      <section>
        <h2>My Proposal</h2>
        <p>Build on the saved report foundation instead of duplicating it.</p>

        <div className="before-after">
          <div className="before">
            <p className="label">Before</p>
            <h3>Parallel Flows</h3>
            <p>Save and recurring export required separate setup and separate logic.</p>
          </div>
          <div className="after">
            <p className="label">After</p>
            <h3>Unified Workflow</h3>
            <p>Save once, then optionally schedule export from the same configuration.</p>
          </div>
        </div>

        <div className="flow-sequence">
          <figure>
            <figcaption>Run Report</figcaption>
            <img src={designHarvest06} alt="Run Report — unified flow" />
          </figure>
          <figure>
            <figcaption>Save Report with Recurring Options</figcaption>
            <img src={designHarvest07} alt="Save Report with Recurring Options" />
          </figure>
          <figure>
            <figcaption>Saved Report Edit Recurring</figcaption>
            <img src={designHarvest08} alt="Saved Report Edit Recurring" />
          </figure>
        </div>
      </section>

      <section>
        <h2>Collaboration</h2>
        <p>
          Although my role on this project was software engineer, the decision point wasn't
          purely technical, it was about how the workflow would scale for users and for the
          codebase.
        </p>
        <p>
          Rather than raising concerns in the abstract, I presented a concrete alternative that
          unified the workflow and reduced overall effort for both users and engineering.
        </p>
        <p>That work involved:</p>
        <ul>
          <li>Framing the issue in terms of user mental models, not implementation details</li>
          <li>Showing how duplicated configuration would compound over time</li>
          <li>Proposing a solution that reduced scope instead of expanding it</li>
        </ul>
        <p>
          My familiarity with the reporting codebase made it possible to offer an approach that
          was both UX-sound and technically feasible within the existing constraints.
        </p>
        <p>
          By pairing critique with a viable path forward, the team was able to adjust course
          without delaying delivery or increasing risk.
        </p>
      </section>

      <section className="metrics">
        <h2>Impact</h2>
        <p>Users could define a report once and reuse it across saving and scheduling, reducing rework and confusion.</p>
        <p>Engineering avoided maintaining nearly identical logic in multiple places, lowering long-term complexity.</p>
        <p>The team delivered the scheduled export capability on time without introducing a second reporting system.</p>
      </section>

      <section>
        <h2>Reflection</h2>
        <p>
          TL;DR: A hybrid background brings a responsibility to speak up, contribute thoughtfully,
          and help teams move forward, regardless of title.
        </p>
        <p>
          Regardless of title, I aim to bring my full perspective to the work, especially when
          doing so can reduce complexity, protect users, or help the team execute more effectively.
          In this case, my engineering context allowed me to see an opportunity to improve the
          experience, and I felt accountable for raising it.
        </p>
        <p>
          Equally important was how that feedback was delivered. Questioning direction meant being
          precise, respectful, and solution-oriented, explaining the risk clearly and pairing it
          with a viable alternative.
        </p>
        <p>
          I don't operate from a "not my job" mindset. I operate from a shared goals mindset, one
          where good ideas surface early, collaboration stays intact, and teams move forward
          together.
        </p>
      </section>
    </article>
  )
}

export default DesignHarvest
