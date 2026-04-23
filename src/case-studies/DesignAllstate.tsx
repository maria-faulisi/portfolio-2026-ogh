import designAllstateScreens from "../assets/design-allstate-screens.png";
import designAllstateFlow from "../assets/design-allstate-flow.jpg";
import designAllstateCompare from "../assets/design-allstate-compare.jpg";

const DesignAllstate = () => {
  return (
    <article className="case-study">
      <header className="case-study-header">
        <p className="eyebrow">Case Study</p>
        <h1>Allstate</h1>
        <h2>
          Reducing Structural Complexity in a Multi-Driver, Multi-Vehicle Flow
        </h2>
        <p>Role: Senior UX Architect</p>
        <p>Industry: Financial Services</p>
      </header>

      <img
        src={designAllstateScreens}
        alt="Allstate quote flow screens"
        className="case-study-hero"
      />

      <section className="tldr">
        <h3>TL;DR</h3>
        <dl>
          <dt>Problem:</dt>
          <dd>
            Quote flows grew unpredictable as questions multiplied across
            drivers and vehicles.
          </dd>
          <dt>Insight:</dt>
          <dd>
            Complexity came from flow structure, not the data being collected.
          </dd>
          <dt>Outcome:</dt>
          <dd>
            Reduced friction and improved predictability without changing
            underwriting rules.
          </dd>
        </dl>
      </section>

      <section>
        <h2>The Problem</h2>
        <p>
          The quote flow was perceived as slow, but the underlying issue was
          structural. Early designs optimized for individual steps without
          grounding the experience in how real households scale.
        </p>
        <p>Specifically, the flow lacked:</p>
        <ul>
          <li>
            <strong>Grounding in the standard household size</strong> — The
            experience was not designed around a typical household
            configuration, treating common scenarios like edge cases.
          </li>
          <li>
            <strong>Accounting for multiple drivers and vehicles</strong> —
            Questions were repeated per driver and per vehicle, even when the
            data being collected was common.
          </li>
          <li>
            <strong>Predictability in completion time</strong> — Users and
            agents had no clear sense of how long the quote would take as
            complexity increased.
          </li>
        </ul>
        <p>
          Question count increased exponentially, not because of the data being
          collected, but because of how the flow was structured.
        </p>

        <div className="flow-scaling">
          <div className="flow-step">
            <h4>1 Question</h4>
            <div className="flow-rows">
              <img src={designAllstateFlow} alt="1 question" />
            </div>
          </div>
          <div className="flow-step">
            <h4>1 Question x 4 Drivers</h4>
            <div className="flow-rows">
              {[0, 1, 2, 3].map((i) => (
                <img key={i} src={designAllstateFlow} alt="" />
              ))}
            </div>
          </div>
          <div className="flow-step">
            <h4>1 Question x 4 Drivers x 3 Vehicles</h4>
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
        <h4>Any solution had to preserve:</h4>
        <ul>
          <li>Regulatory compliance</li>
          <li>Underwriting completeness</li>
          <li>Agent defensibility</li>
          <li>Existing back-end data models</li>
          <li>Fixed engineering scope</li>
          <li>Operational impact on agents</li>
        </ul>
        <p>
          Removing questions or deferring data would have created downstream
          risk. The solution had to change the structure, not the requirements.
        </p>
      </section>

      <section>
        <h2>The Insight</h2>
        <h1>
          Perceived effort is driven more by the number of questions than the
          number of inputs
        </h1>
      </section>

      <section>
        <h2>My Proposal</h2>
        <p>Instead of reducing data, I changed which dimension scaled:</p>
        <ul>
          <li>Old model: Questions x Drivers x Vehicles</li>
          <li>Proposed model: Fixed questions, variable driver inputs</li>
        </ul>

        <div className="before-after">
          <div className="before">
            <p className="label">Before</p>
            <h3>Driver-centric Flow</h3>
            <h4>Driver-centric Flow</h4>
            <p>
              Each driver was walked through the same vehicle questions
              repeatedly.
            </p>
          </div>
          <div className="after">
            <p className="label">After</p>
            <h3>Fixed-Question / Variable-Input Flow</h3>
            <h4>Fixed-Question / Variable-Input Flow</h4>
            <p>
              Each vehicle had a fixed set of questions. Drivers were selected
              as inputs within each question.
            </p>
          </div>
        </div>

        <figure className="flow-figure">
          <figcaption>1 Question, 4 Driver Inputs</figcaption>
          <img
            src={designAllstateCompare}
            alt="1 question with 4 driver inputs"
          />
        </figure>
        <figure className="flow-figure">
          <figcaption>1 Question x 3 Vehicles</figcaption>
          <img src={designAllstateCompare} alt="1 question across 3 vehicles" />
        </figure>
      </section>

      <section className="metrics">
        <h2>Quantifying the Impact</h2>
        <p>Standard household: 4 drivers, 3 vehicles</p>
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
        <p>
          <strong>75%</strong> Reduction in question count
        </p>
        <p>
          <strong>0%</strong> Reduction in required data
        </p>
      </section>

      <section>
        <h2>Organizational Reality</h2>
        <p>
          I recognized early that fully implementing this model would exceed the
          original scope and require the help of many departments.
        </p>
        <p>
          I escalated the structural findings to leadership to ensure shared
          understanding and future planning around the real issue, not just
          surface-level symptoms.
        </p>
        <p>
          This shifted the conversation from "make it faster" to "make it
          scalable."
        </p>
      </section>

      <section>
        <h2>Reflection</h2>
        <p>
          TL;DR: This work surfaced the structural constraint behind slow quote
          times and enabled an informed tradeoff between self-serve completeness
          and operational speed.
        </p>
        <p>
          UX impact isn't always an interface change. Often, the highest value
          is diagnosing where a system breaks and making that constraint visible
          so the organization can decide how to respond.
        </p>
        <p>
          Here, the work showed that quote delays were driven by upstream data
          modeling and sequencing, not UI execution. The organization ultimately
          prioritized conversion by collecting less data in the self-serve flow
          and adjusting risk levels. Given the constraints and business goals,
          this was a pragmatic decision.
        </p>
      </section>
    </article>
  );
};

export default DesignAllstate;
