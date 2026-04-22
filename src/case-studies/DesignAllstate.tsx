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

      <section className="tldr">
        <h2>TL;DR</h2>
        <dl>
          <dt>Problem</dt>
          <dd>"Quote flows grew unpredictable as questions multiplied across drivers and vehicles."</dd>
          <dt>Insight</dt>
          <dd>"Complexity came from flow structure, not the data being collected."</dd>
          <dt>Outcome</dt>
          <dd>"Reduced friction and improved predictability without changing underwriting rules."</dd>
        </dl>
      </section>

      <section>
        <h2>The Problem</h2>
        <p>
          The quoted experience faced structural challenges rather than pure speed issues.
          The flow lacked grounding in standard household configurations, failed to account for
          multiple drivers and vehicles (data repetition across entities), and offered no
          predictability in completion time estimates.
        </p>
        <blockquote>
          "Question count increased exponentially, not because of the data being collected,
          but because of how the flow was structured."
        </blockquote>
        <h3>Scaling Illustration</h3>
        <ul>
          <li>1 question</li>
          <li>1 question × 4 drivers</li>
          <li>1 question × 4 drivers × 3 vehicles</li>
        </ul>
      </section>

      <section>
        <h2>Constraints</h2>
        <p>Solutions required preserving:</p>
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
        <h2>Central Insight</h2>
        <blockquote>
          "Perceived effort is driven more by the number of questions than the number of inputs."
        </blockquote>
      </section>

      <section>
        <h2>The Solution</h2>
        <p>
          Changed from question multiplication across dimensions to fixed questions with variable
          driver inputs.
        </p>
        <dl>
          <dt>Before</dt>
          <dd>Questions × Drivers × Vehicles — each driver navigated identical vehicle questions repeatedly.</dd>
          <dt>After</dt>
          <dd>Fixed questions, variable driver inputs — each vehicle contained fixed questions; drivers appeared as input selections.</dd>
        </dl>
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
        <p>
          The work demonstrated that delays originated in upstream data modeling and sequencing
          rather than interface design execution.
        </p>
      </section>
    </article>
  )
}

export default DesignAllstate
