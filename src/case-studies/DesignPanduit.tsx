import { Link } from "react-router-dom";
import designPanduit01 from "../assets/design-panduit-01.jpg";
import designPanduitScreens from "../assets/design-panduit-screens.png";
import designPanduit02 from "../assets/design-panduit-02.png";
import KindredWork from "../components/KindredWork";
import Reveal from "../components/Reveal";
import { work } from "../data/work";

const w = work["d-panduit"];

const DesignPanduit = () => {
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
            Modernizing a legacy
            <br />
            <em>distributor</em> portal.
          </h1>
          <p className="lead">
            A 20-year-old enterprise portal, frozen APIs, a compressed
            timeline, and long-tenured users with deep muscle memory. The work
            was to design from technical reality, not around it.
          </p>

          <div className="case-meta-grid">
            <div className="field">
              <span className="field-label">Client</span>
              <span className="field-value">Panduit</span>
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
            <img src={designPanduit01} alt="Panduit distributor portal" />
            <figcaption className="case-frame-caption">
              <span>Fig. 06 · Distributor portal — modernized surface</span>
              <span>Panduit · 2017—2018</span>
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
              The portal worked. It just stopped matching how users now
              expect enterprise tools to behave.
            </h4>
            <p>
              The frontend dated back to early web patterns — over twenty
              years old. Functional, but increasingly misaligned with modern
              expectations. Dated interaction patterns introduced confusion
              and cognitive overhead, especially for newer users.
            </p>
            <ul className="triptych">
              <li className="triptych-card">
                <span className="triptych-card-num">— Issue 01</span>
                <h5>Validation lagged input</h5>
                <p>
                  Errors appeared after submission, not during input. The
                  portal didn't help users avoid mistakes — it scored them.
                </p>
              </li>
              <li className="triptych-card">
                <span className="triptych-card-num">— Issue 02</span>
                <h5>Status was invisible</h5>
                <p>
                  Progress indicators were unclear or missing. Silent failures
                  left users uncertain whether actions had succeeded.
                </p>
              </li>
              <li className="triptych-card">
                <span className="triptych-card-num">— Issue 03</span>
                <h5>IA followed data, not tasks</h5>
                <p>
                  Navigation reflected internal data structures rather than
                  user jobs, requiring unnecessary steps and overhead.
                </p>
              </li>
            </ul>
            <figure
              className="case-frame"
              style={{ aspectRatio: "16 / 7", marginTop: 24 }}
            >
              <img src={designPanduitScreens} alt="Legacy portal screens" />
              <figcaption className="case-frame-caption">
                <span>Legacy portal — selected screens</span>
                <span>Pre-rework</span>
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
            <ol className="steps">
              <li>
                <div>
                  <h4>Fixed APIs &amp; data models</h4>
                  <p>
                    The backend wasn't moving on this timeline. Every design
                    decision had to live inside the existing endpoints.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Parallel platform work &amp; compressed timeline</h4>
                  <p>
                    Other teams were rebuilding around us. We had to ship in a
                    way they could integrate with — not against.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Legacy-trained users with muscle memory</h4>
                  <p>
                    The portal had long-tenured users who knew where every
                    odd link lived. We had to modernize without breaking what
                    they were already fast at.
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
              API behavior and edge cases <em>are</em> the system you're
              designing. Treat them as inputs, not obstacles.
              <cite>— Working principle</cite>
            </blockquote>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 04</span>
            <h3>The solution</h3>
          </aside>
          <div className="case-section-body">
            <p>
              Modernized the portal experience inside the existing technical
              infrastructure. Task-based navigation, reusable components, and
              predictable patterns replaced dated workflows — all without
              touching backend APIs.
            </p>
            <div className="image-grid">
              <figure>
                <img src={designPanduit01} alt="Modernized portal screens" />
                <figcaption>
                  <span>Task-based navigation</span>
                  <span>Same APIs, smarter orchestration</span>
                </figcaption>
              </figure>
              <figure>
                <img src={designPanduit02} alt="Modernized portal detail" />
                <figcaption>
                  <span>Components encode constraints</span>
                  <span>Validation matches backend rules</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 05</span>
            <h3>The approach</h3>
          </aside>
          <div className="case-section-body">
            <ol className="steps">
              <li>
                <div>
                  <h4>Design from technical reality</h4>
                  <p>
                    Partnered with engineering to map API behavior, validation
                    rules, and edge cases up front. Backend constraints became
                    design requirements.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Components encode constraints</h4>
                  <p>
                    Validation matches backend rules. Error states reflect
                    actual failures. Loading follows real API responses.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>IA that leverages existing endpoints</h4>
                  <p>
                    Reorganized navigation around user tasks using the API
                    calls we already had. Same backend, smarter orchestration.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Strategic prioritization</h4>
                  <p>
                    Prioritized improvements that reused backend behavior.
                    Delivered UX gains without technical debt or
                    implementation risk.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Validation within constraints</h4>
                  <p>
                    Research that validated user value <em>and</em> technical
                    feasibility — so we built only what mattered and what
                    could ship.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Scalable collaboration</h4>
                  <p>
                    Built component patterns and handoff processes that
                    reduced ongoing oversight. Foundations the next team
                    could build on without me in the room.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 06</span>
            <h3>The impact</h3>
          </aside>
          <div className="case-section-body">
            <h4>Delivered on time, without backend rewrites.</h4>
            <p>
              The constraint-first approach eliminated the rework cycles that
              typically plague enterprise redesigns. Engineering implemented
              with confidence because the designs reflected actual system
              behavior.
            </p>
            <h4>Component patterns accelerated subsequent features.</h4>
            <p>
              The system created a shared vocabulary between design and
              engineering. Error handling became proactive rather than
              reactive. Edge cases were addressed during design — not
              discovered in production.
            </p>
            <h4>Users responded positively.</h4>
            <p>
              Customer feedback indicated they "loved" the modernized
              experience. The updated portal aligned with current expectations
              while maintaining the reliability they depended on.
            </p>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 07</span>
            <h3>The reflection</h3>
          </aside>
          <div className="case-section-body">
            <p>
              Meaningful improvements don't require rewrites. They require
              designing from technical reality. Early partnership with
              engineering prevents the costly "looks great but we can't build
              it" cycles that derail enterprise projects.
            </p>
            <p>
              For hybrid roles, this is the core competency: making systems
              both more usable and more buildable by treating constraints as
              design inputs, not obstacles.
            </p>
          </div>
        </Reveal>
      </section>

      <KindredWork fromId={w.id} />
    </article>
  );
};

export default DesignPanduit;
