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
        <p className="subtitle">Identifying Structural Duplication Across Reporting Workflows</p>
        <dl className="meta">
          <dt>Role</dt>
          <dd>Product-minded Engineer</dd>
          <dt>Industry</dt>
          <dd>SaaS</dd>
        </dl>
      </header>

      <img src={designHarvest01} alt="Harvest reporting workflow" className="case-study-hero" />

      <section className="tldr">
        <h2>TL;DR</h2>
        <dl>
          <dt>Problem</dt>
          <dd>Reporting features evolved as separate workflows, creating duplicated setup and confusion.</dd>
          <dt>Insight</dt>
          <dd>Saving and scheduling reflected the same user intent but were modeled independently.</dd>
          <dt>Outcome</dt>
          <dd>Unified the workflow, reduced rework, and shipped without increasing scope.</dd>
        </dl>
      </section>

      <img src={designMockup} alt="" className="case-study-mockup" />

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
      </section>
    </article>
  )
}

export default DesignHarvest
