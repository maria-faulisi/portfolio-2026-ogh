import { Link } from "react-router-dom";
import designAllstateScreens from "../assets/design-allstate-screens.png";
import designAllstateFlow from "../assets/design-allstate-flow.jpg";
import designAllstateCompare from "../assets/design-allstate-compare.jpg";
import KindredWork from "../components/KindredWork";
import Reveal from "../components/Reveal";
import { work } from "../data/work";

const w = work["d-allstate"];

const DesignAllstate = () => {
  return (
    <article>
      <section className="container case-study">
        <div className="case-meta-bar">
          <Link to="/">← Index</Link>
          <span className="dot">·</span>
          <span>{w.index}</span>
          <span className="dot">·</span>
          <span>{w.discipline}</span>
          <span className="dot">·</span>
          <span>{w.company}</span>
        </div>

        <Reveal className="case-hero">
          <p className="case-index">Case Study {w.index} / 06</p>
          <h1 className="serif">
            Reducing complexity in a
            <br />
            <em>multi-driver</em> quote flow.
          </h1>
          <p className="lead">
            The quote flow felt slow. The real issue was structural: questions
            multiplying across drivers and vehicles. I changed which dimension
            scaled, not what the system asked.
          </p>

          <div className="case-meta-grid">
            <div className="field">
              <span className="field-label">Client</span>
              <span className="field-value">Allstate</span>
            </div>
            <div className="field">
              <span className="field-label">Role</span>
              <span className="field-value">{w.role}</span>
            </div>
            <div className="field">
              <span className="field-label">Surface</span>
              <span className="field-value">{w.surface}</span>
            </div>
            <div className="field">
              <span className="field-label">Years</span>
              <span className="field-value">{w.years}</span>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <figure className="case-frame">
            <img
              src={designAllstateScreens}
              alt="Allstate quote flow screens"
            />
            <figcaption className="case-frame-caption">
              <span>
                Fig. 04 · Quote flow — fixed-question / variable-input
              </span>
              <span>Allstate · 2019—2021</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <ul className="metric-tiles">
            <li>
              <span className="metric-value">
                <em>75%</em>
              </span>
              <span className="metric-label">Reduction in question count</span>
              <span className="metric-detail">
                For the standard 4-driver, 3-vehicle household.
              </span>
            </li>
            <li>
              <span className="metric-value">
                <em>0%</em>
              </span>
              <span className="metric-label">Reduction in required data</span>
              <span className="metric-detail">
                Underwriting completeness preserved.
              </span>
            </li>
            <li>
              <span className="metric-value">
                <em>72 → 18</em>
              </span>
              <span className="metric-label">Questions, before / after</span>
              <span className="metric-detail">Same data, restructured.</span>
            </li>
            <li>
              <span className="metric-value">
                <em>1</em>
              </span>
              <span className="metric-label">Strategic redirect</span>
              <span className="metric-detail">
                Shifted org from "make it faster" to "make it scalable".
              </span>
            </li>
          </ul>
        </Reveal>
      </section>

      <section className="container">
        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 01</span>
            <h3>The problem</h3>
          </aside>
          <div className="case-section-body">
            <h4>The flow felt slow. The real issue was structural.</h4>
            <p>
              Early designs optimized for individual steps without grounding the
              experience in how real households actually scale. Common
              configurations were treated like edge cases. Question count
              compounded, not because more data was being collected, but because
              of how the flow was structured.
            </p>
            <ul className="triptych">
              <li className="triptych-card">
                <span className="triptych-card-num">— Issue 01</span>
                <h5>No grounding in standard household size</h5>
                <p>
                  The flow wasn't designed around a typical household, so common
                  scenarios behaved like exceptions.
                </p>
              </li>
              <li className="triptych-card">
                <span className="triptych-card-num">— Issue 02</span>
                <h5>Questions repeated per driver, per vehicle</h5>
                <p>
                  Even when the data being collected was common across the
                  household, the structure asked again, and again.
                </p>
              </li>
              <li className="triptych-card">
                <span className="triptych-card-num">— Issue 03</span>
                <h5>No predictability in time-to-completion</h5>
                <p>
                  Users and agents had no clear sense of how long a quote would
                  take as complexity increased.
                </p>
              </li>
            </ul>

            <div className="image-grid image-grid-collapse-bottom">
              <figure>
                <img src={designAllstateFlow} alt="One question, one driver" />
                <figcaption>
                  <span>1 question × 1 driver × 1 vehicle</span>
                  <span>Acceptable</span>
                </figcaption>
              </figure>
            </div>
            <figure className="image-grid-4">
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <figcaption>
                {/* <span>1 question · 1 driver</span> */}
                <span>1 question × 4 drivers × 1 vehicle</span>
                <span>Manageable</span>
              </figcaption>
            </figure>
            <figure className="image-grid-4">
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <img src={designAllstateFlow} alt="One question, one driver" />
              <figcaption>
                <span>1 question × 4 drivers × 3 vehicles</span>
                <span>Untenable</span>
              </figcaption>
            </figure>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 02</span>
            <h3>The constraints</h3>
          </aside>
          <div className="case-section-body">
            <p>Any solution had to preserve:</p>
            <ol className="steps">
              <li>
                <div>
                  <h4>Regulatory compliance &amp; underwriting completeness</h4>
                  <p>
                    Removing questions or deferring data created downstream
                    risk. The data couldn't change.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Agent defensibility &amp; existing data models</h4>
                  <p>
                    The back-end didn't move on this timeline. The structure had
                    to.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Fixed engineering scope &amp; agent operations</h4>
                  <p>
                    The change had to be deliverable, and shippable into the
                    agent workflow without disruption.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 03</span>
            <h3>The insight</h3>
          </aside>
          <div className="case-section-body">
            <blockquote className="pull">
              Perceived effort is driven more by the number of questions than
              the number of inputs. So change which dimension scales, not what
              the system asks.
              <cite>— Working principle</cite>
            </blockquote>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 04</span>
            <h3>The proposal</h3>
          </aside>
          <div className="case-section-body">
            <h4>Same data. Different structure.</h4>
            <p>
              <strong>Old model:</strong> Questions × Drivers × Vehicles.
              <br />
              <strong>Proposed:</strong> Fixed questions, variable driver
              inputs.
            </p>
            <div className="image-grid">
              <figure>
                <img
                  src={designAllstateCompare}
                  alt="After — fixed-question / variable-input flow"
                />
                <figcaption>
                  <span>After · fixed question, variable input</span>
                  <span>1 question / many drivers</span>
                </figcaption>
              </figure>
            </div>
            <figure className="image-grid-3">
              <img
                src={designAllstateCompare}
                alt="After — fixed-question / variable-input flow"
              />
              <img
                src={designAllstateCompare}
                alt="After — fixed-question / variable-input flow"
              />
              <img
                src={designAllstateCompare}
                alt="After — fixed-question / variable-input flow"
              />
              <figcaption>
                <span>1 question × 4 drivers × 3 vehicles</span>
                <span>Manageable</span>
              </figcaption>
            </figure>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 05</span>
            <h3>The reframe</h3>
          </aside>
          <div className="case-section-body">
            <p>
              I escalated the structural finding to leadership before pursuing
              implementation. The most valuable UX move on this project wasn't
              an interface change; it was making the underlying constraint
              visible to the people who could decide what to do about it.
            </p>
            <p>
              That shifted the organizational conversation from{" "}
              <em>"make it faster"</em> to <em>"make it scalable"</em>, a
              different decision space, with different downstream investment.
            </p>
            <p>
              UX impact isn't always an interface change. Often, the highest
              value is diagnosing where a system breaks and making that
              constraint legible.
            </p>
          </div>
        </Reveal>
      </section>

      <KindredWork fromId={w.id} />
    </article>
  );
};

export default DesignAllstate;
