import designAllstateScreens from '../assets/design-allstate-screens.png'
import designMockup from '../assets/design-mockup.png'
import designAllstateFlow from '../assets/design-allstate-flow.jpg'
import designAllstateCompare from '../assets/design-allstate-compare.jpg'

const DesignAllstate = () => {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="eyebrow">Case Study</p>
        <h1>Allstate</h1>
        <p className="subtitle">Reducing Structural Complexity in a Multi-Driver, Multi-Vehicle Flow</p>
        <dl className="meta">
          <dt>Role</dt>
          <dd>Senior UX Architect</dd>
          <dt>Industry</dt>
          <dd>Financial Services</dd>
        </dl>
      </header>

      <img src={designAllstateScreens} alt="Allstate quote flow screens" className="case-study-hero" />

      <section className="tldr">
        <h2>TL;DR</h2>
        <dl>
          <dt>Problem</dt>
          <dd>Quote flows grew unpredictable as questions multiplied across drivers and vehicles.</dd>
          <dt>Insight</dt>
          <dd>Complexity came from flow structure, not the data being collected.</dd>
          <dt>Outcome</dt>
          <dd>Reduced friction and improved predictability without changing underwriting rules.</dd>
        </dl>
      </section>

      <img src={designMockup} alt="" className="case-study-mockup" />

      <section>
        <h2>The Problem</h2>
        <p>
          The quote experience faced structural challenges. The flow lacked grounding in standard
          household configurations, failed to account for multiple drivers and vehicles, and offered
          no predictability in completion time.
        </p>
        <ul>
          <li>Grounding in the standard household size</li>
          <li>Accounting for multiple drivers and vehicles</li>
          <li>Predictability in completion time</li>
        </ul>

        <div className="flow-scaling">
          <div className="flow-step">
            <h4>1 Question</h4>
            <div className="flow-rows">
              <img src={designAllstateFlow} alt="1 question" />
            </div>
          </div>
          <div className="flow-step">
            <h4>1 Question × 4 Drivers</h4>
            <div className="flow-rows">
              {[0, 1, 2, 3].map(i => (
                <img key={i} src={designAllstateFlow} alt="" />
              ))}
            </div>
          </div>
          <div className="flow-step">
            <h4>1 Question × 4 Drivers × 3 Vehicles</h4>
            <div className="flow-rows">
              {Array.from({ length: 12 }, (_, i) => (
                <img key={i} src={designAllstateFlow} alt="" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Constraints</h2>
        <p>Any solution had to preserve:</p>
        <ul>
          <li>Regulatory compliance</li>
          <li>Underwriting completeness</li>
          <li>Agent defensibility</li>
          <li>Existing back-end data models</li>
          <li>Fixed engineering scope</li>
          <li>Operational impact on agents</li>
        </ul>
      </section>

      <section>
        <h2>The Insight</h2>
        <blockquote>
          "Perceived effort is driven more by the number of questions than the number of inputs."
        </blockquote>
      </section>

      <section>
        <h2>My Proposal</h2>
        <p>Instead of reducing data, I changed which dimension scaled.</p>

        <div className="before-after">
          <div className="before">
            <p className="label">Before</p>
            <h3>Driver-centric Flow</h3>
            <p>Each driver was walked through the same vehicle questions repeatedly.</p>
          </div>
          <div className="after">
            <p className="label">After</p>
            <h3>Fixed-Question / Variable-Input Flow</h3>
            <p>Each vehicle had a fixed set of questions. Drivers were selected as inputs within each question.</p>
          </div>
        </div>

        <figure className="flow-figure">
          <figcaption>1 Question, 4 Driver Inputs</figcaption>
          <img src={designAllstateCompare} alt="1 question with 4 driver inputs" />
        </figure>
        <figure className="flow-figure">
          <figcaption>1 Question × 3 Vehicles</figcaption>
          <img src={designAllstateCompare} alt="1 question across 3 vehicles" />
        </figure>
      </section>

      <section className="metrics">
        <h2>Impact</h2>
        <p>Standard household scenario: 4 drivers, 3 vehicles</p>
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Drivers</th>
              <th>Vehicles</th>
              <th>Questions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Traditional</td>
              <td>4</td>
              <td>3</td>
              <td>~72</td>
            </tr>
            <tr>
              <td>Proposed</td>
              <td>4</td>
              <td>3</td>
              <td>18</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li><strong>75%</strong> Question count reduction</li>
          <li><strong>0%</strong> Data requirement reduction</li>
        </ul>
      </section>

      <section>
        <h2>Reflection</h2>
        <blockquote>
          "UX impact isn't always an interface change. Often, the highest value is diagnosing
          where a system breaks and making that constraint visible so the organization can decide
          how to respond."
        </blockquote>
      </section>
    </article>
  )
}

export default DesignAllstate
