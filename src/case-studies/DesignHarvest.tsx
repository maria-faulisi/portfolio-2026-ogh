import { Link } from "react-router-dom";
import designHarvest01 from "../assets/design-harvest-01.jpg";
import designHarvest02 from "../assets/design-harvest-02.jpg";
import designHarvest03 from "../assets/design-harvest-03.jpg";
import designHarvest04 from "../assets/design-harvest-04.jpg";
import designHarvest05 from "../assets/design-harvest-05.jpg";
import designHarvest06 from "../assets/design-harvest-06.jpg";
import designHarvest07 from "../assets/design-harvest-07.jpg";
import designHarvest08 from "../assets/design-harvest-08.jpg";
import KindredWork from "../components/KindredWork";
import Reveal from "../components/Reveal";
import { work } from "../data/work";

const w = work["d-harvest"];

const DesignHarvest = () => {
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
            Unifying saved &amp; recurring
            <br />
            <em>report</em> workflows.
          </h1>
          <p className="lead">
            Two reporting flows had quietly grown into one user intent. I
            framed the duplication, proposed a unified path, and helped the
            team ship without expanding scope.
          </p>

          <div className="case-meta-grid">
            <div className="field">
              <span className="field-label">Client</span>
              <span className="field-value">Harvest</span>
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
            <img src={designHarvest01} alt="Harvest reporting workflow" />
            <figcaption className="case-frame-caption">
              <span>Fig. 05 · Reporting workflow — unified path</span>
              <span>Harvest · 2022—2023</span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <section className="container">
        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 01</span>
            <h3>The problem</h3>
          </aside>
          <div className="case-section-body">
            <h4>
              Save and schedule had quietly become two flows for one intent.
            </h4>
            <p>
              A saved-report capability had recently shipped. The next milestone
              added recurring exports — emails delivered on a cadence, with
              reports stored in Harvest. Under delivery pressure, the initial
              direction treated recurring exports as a separate flow that
              mirrored the saved-report experience, with extra config bolted
              on top.
            </p>
            <ul className="triptych">
              <li className="triptych-card">
                <span className="triptych-card-num">— Effect 01</span>
                <h5>Duplicated setup for users</h5>
                <p>
                  The same report had to be configured more than once to
                  save it and schedule it.
                </p>
              </li>
              <li className="triptych-card">
                <span className="triptych-card-num">— Effect 02</span>
                <h5>Parallel logic for engineering</h5>
                <p>
                  Nearly identical behavior was implemented and maintained
                  in separate paths.
                </p>
              </li>
              <li className="triptych-card">
                <span className="triptych-card-num">— Effect 03</span>
                <h5>Mismatched mental models</h5>
                <p>
                  Users were forced to learn an internal distinction that
                  didn't map to how they thought about reporting.
                </p>
              </li>
            </ul>

            <h4 style={{ marginTop: 24 }}>Initial design — parallel flows</h4>
            <div className="image-grid">
              <figure>
                <img src={designHarvest01} alt="Run report" />
                <figcaption>
                  <span>Run report</span>
                  <span>Save path</span>
                </figcaption>
              </figure>
              <figure>
                <img src={designHarvest02} alt="Save report" />
                <figcaption>
                  <span>Save report</span>
                  <span>Save path</span>
                </figcaption>
              </figure>
              <figure>
                <img src={designHarvest03} alt="Saved report list" />
                <figcaption>
                  <span>Saved report list</span>
                  <span>Save path</span>
                </figcaption>
              </figure>
              <figure>
                <img src={designHarvest04} alt="Create recurring report" />
                <figcaption>
                  <span>Create recurring report</span>
                  <span>Schedule path</span>
                </figcaption>
              </figure>
              <figure>
                <img src={designHarvest05} alt="Recurring report list" />
                <figcaption>
                  <span>Recurring report list</span>
                  <span>Schedule path</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 02</span>
            <h3>The insight</h3>
          </aside>
          <div className="case-section-body">
            <blockquote className="pull">
              Saving and scheduling are the same intent — define a report
              once, then choose how it's delivered.
              <cite>— Reframe of the brief</cite>
            </blockquote>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 03</span>
            <h3>The proposal</h3>
          </aside>
          <div className="case-section-body">
            <h4>Build on the saved-report foundation, don't duplicate it.</h4>
            <p>
              Same configuration object. Same list. Save once, then optionally
              schedule from the same place.
            </p>
            <div className="image-grid">
              <figure>
                <img src={designHarvest06} alt="Run report — unified flow" />
                <figcaption>
                  <span>Run report</span>
                  <span>Unified path</span>
                </figcaption>
              </figure>
              <figure>
                <img
                  src={designHarvest07}
                  alt="Save report with recurring options"
                />
                <figcaption>
                  <span>Save with recurring options</span>
                  <span>Unified path</span>
                </figcaption>
              </figure>
              <figure>
                <img src={designHarvest08} alt="Saved report — edit recurring" />
                <figcaption>
                  <span>Edit recurring on a saved report</span>
                  <span>Unified path</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 04</span>
            <h3>The collaboration</h3>
          </aside>
          <div className="case-section-body">
            <p>
              My title on the project was software engineer. The decision point
              wasn't purely technical, though — it was about how the workflow
              would scale, for users and for the codebase.
            </p>
            <p>Rather than raising concerns in the abstract, I:</p>
            <ol className="steps">
              <li>
                <div>
                  <h4>Framed the issue in user mental models</h4>
                  <p>
                    Not implementation details. The duplication wasn't an
                    engineering smell — it was a UX one.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Showed how duplication compounds over time</h4>
                  <p>
                    Two flows today is four next quarter once exports get
                    additional delivery channels.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Proposed a solution that reduced scope</h4>
                  <p>
                    Not expanded it. The unified path was less work, not more.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 05</span>
            <h3>The reflection</h3>
          </aside>
          <div className="case-section-body">
            <p>
              A hybrid background brings a responsibility to speak up,
              regardless of title. In this case, my engineering context made an
              opportunity legible — and pairing the critique with a viable
              alternative meant the team could adjust without delaying delivery
              or increasing risk.
            </p>
            <p>
              I don't operate from a "not my job" mindset. I operate from a
              shared-goals mindset: good ideas surface early, collaboration
              stays intact, teams move forward together.
            </p>
          </div>
        </Reveal>
      </section>

      <KindredWork fromId={w.id} />
    </article>
  );
};

export default DesignHarvest;
