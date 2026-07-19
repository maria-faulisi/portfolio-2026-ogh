import { Link } from "react-router-dom";
import dsPanduitHero from "../assets/ds-panduit-hero.png";
import KindredWork from "../components/KindredWork";
import Reveal from "../components/Reveal";
import { work } from "../data/work";

const w = work["ds-panduit"];

const DesignSystemsPanduit = () => {
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
            Aligning siloed business units
            <br />
            through a <em>shared</em> system.
          </h1>
          <p className="lead">
            Panduit's digital landscape wasn't just fragmented; it was
            political. The system became as much a peace treaty as a component
            library.
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
            <img src={dsPanduitHero} alt="Panduit AEM Design System" />
            <figcaption className="case-frame-caption">
              <span>Fig. 03 · AEM atomic component system</span>
              <span>Panduit · 2016—2018</span>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <ul className="metric-tiles">
            <li>
              <span className="metric-value">
                <em>30—40%</em>
              </span>
              <span className="metric-label">Faster page builds</span>
              <span className="metric-detail">For content authors.</span>
            </li>
            <li>
              <span className="metric-value">
                <em>50%</em>
              </span>
              <span className="metric-label">Less redundant code</span>
              <span className="metric-detail">Across business units.</span>
            </li>
            <li>
              <span className="metric-value">
                <em>70%</em>
              </span>
              <span className="metric-label">Fewer a11y issues</span>
              <span className="metric-detail">In new pages.</span>
            </li>
            <li>
              <span className="metric-value">
                <em>3×</em>
              </span>
              <span className="metric-label">Component adoption</span>
              <span className="metric-detail">Year-over-year usage.</span>
            </li>
          </ul>
        </Reveal>
      </section>

      <section className="container">
        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 01</span>
            <h3>The challenge</h3>
          </aside>
          <div className="case-section-body">
            <h4>
              Panduit's digital landscape wasn't just fragmented. It was
              political.
            </h4>
            <p>
              Every business unit owned its own microsite and used that
              ownership as leverage in broader internal turf-battles. Mismatched
              UX, duplicated code, competing branding, and nearly zero shared
              standards. At the same time, the company was rolling out a new
              AEM stack that needed a unified atomic design system.
            </p>
            <ul className="triptych">
              <li className="triptych-card">
                <span className="triptych-card-num">— Goal 01</span>
                <h5>Serve global teams</h5>
                <p>
                  Different languages, content demands, and marketing
                  priorities, across regions that didn't share a calendar.
                </p>
              </li>
              <li className="triptych-card">
                <span className="triptych-card-num">— Goal 02</span>
                <h5>Support non-technical authors</h5>
                <p>
                  Marketers and regional teams needed to publish pages
                  without engineering help, and without breaking the system.
                </p>
              </li>
              <li className="triptych-card">
                <span className="triptych-card-num">— Goal 03</span>
                <h5>Reduce inconsistency &amp; conflict</h5>
                <p>
                  Eliminate design drift and quietly defuse the political
                  turf-battles that kept slowing digital work down.
                </p>
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 02</span>
            <h3>The approach</h3>
          </aside>
          <div className="case-section-body">
            <ol className="steps">
              <li>
                <div>
                  <h4>Atomic taxonomy as a neutralizing force</h4>
                  <p>
                    Chose atomic design (atoms, molecules, organisms)
                    deliberately. The terminology was neutral; it didn't
                    favor marketing over sales or engineering over design. It
                    became a shared toolkit, not a mandate.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Accessible, modular AEM components</h4>
                  <p>
                    Designed and built reusable components for marketing
                    pages, product specs, lead-gen forms, and support docs.
                    Every component WCAG 2.1 AA-compliant from day one.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Trained non-technical content authors</h4>
                  <p>
                    Most people building pages weren't designers or engineers;
                    they were content authors. I wrote training materials,
                    ran workshops, and built docs aimed squarely at them.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>Served as interim product owner</h4>
                  <p>
                    For six months, ran standups, managed backlog, and
                    facilitated conversations between business units. Used
                    that role to surface shared needs and turn competing
                    priorities into a unified roadmap.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 03</span>
            <h3>The shift</h3>
          </aside>
          <div className="case-section-body">
            <blockquote className="pull">
              "We weren't standardizing buttons. We were giving people who
              didn't trust each other a shared vocabulary."
              <cite>— Retro, end of year one</cite>
            </blockquote>
            <p>
              Once the system became a peace treaty, adoption tripled. Pages
              shipped faster, accessibility quietly came along for the ride,
              and parallel application redesigns landed on a foundation that
              wasn't fighting them.
            </p>
          </div>
        </Reveal>

        <Reveal className="case-section">
          <aside className="case-section-aside">
            <span className="num">— 04</span>
            <h3>What it taught me</h3>
          </aside>
          <div className="case-section-body">
            <ol className="steps">
              <li>
                <div>
                  <h4>
                    Design systems often start as alignment work, not
                    interface work.
                  </h4>
                  <p>
                    The interface is a lagging indicator. The real artifact is
                    the agreement.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>
                    Clarify contracts between design, handoff, and code.
                  </h4>
                  <p>
                    Every gap is a place where rework gets generated for
                    free.
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <h4>A system succeeds when non-technical authors can't break it.</h4>
                  <p>
                    Constraints encoded into components are worth ten pages of
                    docs.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </Reveal>
      </section>

      <KindredWork fromId={w.id} />
    </article>
  );
};

export default DesignSystemsPanduit;
