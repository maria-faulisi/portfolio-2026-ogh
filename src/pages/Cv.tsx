import Reveal from "../components/Reveal";

const skills = [
  {
    label: "Front-End Engineering",
    items: [
      "React · React Native · Preact (Signals)",
      "TypeScript · JavaScript (ES6+)",
      "HTML5 · CSS3 · SCSS/Sass",
      "Emotion.js (CSS-in-JS) · jQuery",
      "Ruby on Rails (light collaboration)",
    ],
  },
  {
    label: "Design Systems & Tooling",
    items: [
      "Component architecture — atomic design, tokens, variants, APIs",
      "Storybook",
      "Design-to-code parity auditing",
      "Documentation & deprecation strategy",
      "GitHub Copilot (production code) · Git",
    ],
  },
  {
    label: "Design Tools",
    items: [
      "Figma (libraries, tokens, variables, auto layout, branching, prototyping)",
      "Sketch (with automation scripting)",
      "Axure",
      "Storybook · FigJam",
    ],
  },
  {
    label: "Quality & Process",
    items: [
      "WCAG 2.1 AA — keyboard, focus, ARIA, contrast",
      "Jest",
      "Cross-browser testing",
      "REST APIs",
      "Agile/Scrum",
    ],
  },
];

const experience = [
  {
    role: "Software Engineer II — Front-End Engineering and Design Systems",
    company: "Harvest",
    location: "Remote",
    dates: "Dec 2021 — Sept 2025",
    context:
      "SaaS time-tracking platform serving 70,000+ businesses · React, TypeScript, React Native · Design system: Porchlight",
    bullets: [
      "Built and shipped production front-end code across Harvest's core product surfaces: web application, React Native mobile (iOS and Android), and third-party browser extensions and integrations (QuickBooks Online, Asana). Worked directly in active product codebases with real user data and production constraints.",
      "Migrated Harvest's legacy iOS and Android mobile apps to a unified React Native architecture, establishing shared primitive components (buttons, inputs, theming, spacing tokens) that reduced duplication and created a consistent interaction foundation across platforms. A from-scratch consolidation of two separate codebases into one.",
      "Conducted design-to-code parity audits across Figma and production, identifying implementation inconsistencies and refactoring components to match design specifications, clarify behavioral standards, and reduce engineering ambiguity at handoff. Reduced design-to-development cycle time by 40%.",
      "Ran DX research on pain points in the Porchlight design system: component naming, prop APIs, accessibility behaviors, and authoring friction. Simplified APIs and updated documentation to reduce onboarding time for engineers building on top of the system.",
      "Prototyped complex component interactions and edge cases in Figma before engineering investment, validating states, transitions, and accessibility flows to catch issues earlier in the process.",
      "Enforced WCAG 2.1 AA standards across all shipped surfaces: keyboard navigation, focus management, ARIA roles and labeling, and color contrast. Partnered with QA and design on accessibility validation pre-launch.",
    ],
  },
  {
    role: "Design Engineer — Lead UX Architect",
    company: "Allstate Insurance",
    location: "Remote",
    dates: "Jul 2019 — Dec 2021",
    context:
      "Fortune 500 insurance company · Highly regulated environment · React, Emotion.js, SCSS · Design system: Mesh · 10+ product squads",
    bullets: [
      "Implemented production-grade React components for Allstate's Mesh Design System, including refactoring legacy SCSS styles to Emotion.js for colocated, maintainable CSS-in-JS. Components consumed by 10+ product squads across the enterprise platform.",
      "Built a custom Sketch automation plugin that programmatically audited design files against the system component library, surfacing design-to-code gaps before engineering handoff. Improved design accuracy by 35% and reduced manual review overhead, an early example of tooling to enforce quality at scale.",
      "Served as Lead UX Architect on the auto insurance purchase-to-bind flow, the company's highest-traffic consumer product. Designed and implemented scalable interaction patterns for pricing, eligibility, and Milewise usage-based coverage customization in a heavily regulated, legally reviewed environment.",
      "Translated the React Mesh component library into an Axure prototyping system, enabling design teams to build interaction-accurate prototypes matching production behavior without waiting for engineering. Introduced and scaled the practice across the organization.",
      "Contributed to design system governance standards that reduced design-to-development rework by 25%. Worked with legal, compliance, and accessibility teams to ship in a high-stakes, regulated product context.",
    ],
  },
  {
    role: "UX Designer — Design Systems",
    company: "Panduit",
    location: "Tinley Park, IL",
    dates: "Jun 2017 — Jul 2019",
    context: "",
    bullets: [
      "Built Panduit's first design system from zero: defined atomic components, token structure, interaction patterns, and governance documentation. Drove adoption across product, engineering, and marketing. Mentored junior front-end developers on implementing components in Adobe Experience Manager. Accelerated delivery timelines by 30%.",
      "Led redesign of Panduit.com and a complex B2B distributor portal, combining user research, information architecture, and front-end implementation in AEM.",
    ],
  },
  {
    role: "UX Designer",
    company: "Designation",
    location: "Chicago, IL",
    dates: "Oct 2016 — Mar 2017",
    context: "",
    bullets: [
      "Completed intensive UX and front-end studio using Stanford d.school design thinking. Shipped research-backed web and mobile products for startup clients using HTML, CSS, and agile delivery.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Kohactive",
    location: "Chicago, IL",
    dates: "Jul 2015 — Aug 2016",
    context: "",
    bullets: [
      "Built client-facing front-end interfaces, custom WordPress themes, and startup MVPs using HTML, CSS, Sass, jQuery, and Ruby on Rails. Translated designer prototypes into performant, cross-browser UI.",
    ],
  },
];

const education = [
  {
    program: "BFA Studies",
    school: "The School of the Art Institute of Chicago (SAIC)",
    detail: "BFA Program (Fine Arts)",
  },
  {
    program: "B.A. Interactive Arts and Media",
    school: "Columbia College Chicago",
    detail: "",
  },
  {
    program: "UX Design Bootcamp",
    school: "Designation",
    detail: "",
  },
  {
    program: "JavaScript and React Bootcamps",
    school: "General Assembly",
    detail: "",
  },
];

const handlePrint = () => window.print();

const Cv = () => {
  return (
    <div className="cv-page">
      <section className="cv-hero container">
        <div className="cv-hero-top">
          <div>
            <p className="eyebrow">§ 04 — Curriculum Vitae</p>
            <h1 className="serif">Maria Faulisi</h1>
            <p className="cv-role">
              Senior Design Engineer <span className="cv-dot">·</span>{" "}
              Component Systems <span className="cv-dot">·</span> Design-to-Code
            </p>
          </div>
          <div className="cv-hero-actions no-print">
            <button className="cta" type="button" onClick={handlePrint}>
              Download PDF
              <span className="cta-arrow" aria-hidden="true">
                ↓
              </span>
            </button>
          </div>
        </div>

        <div className="cv-contact-row">
          <a className="footer-link" href="mailto:mjfaulisi@gmail.com">
            mjfaulisi@gmail.com
          </a>
          <span className="cv-dot">·</span>
          <a className="footer-link" href="tel:+16308007876">
            (630) 800-7876
          </a>
          <span className="cv-dot">·</span>
          <span>Chicago, IL (Remote)</span>
        </div>
      </section>

      <section className="container">
        <Reveal className="cv-summary">
          <p className="eyebrow">Summary</p>
          <p>
            Design Engineer with 10+ years of experience building
            production-grade component systems and user interfaces at the
            intersection of UX design and front-end engineering. Ships real
            code: React, TypeScript, React Native, and CSS-in-JS in active
            product codebases serving tens of thousands of users. Specializes
            in building and evolving the shared UI infrastructure that
            product teams rely on, including component libraries, design
            systems, and the tooling and documentation that makes them usable
            at scale. Brings design fluency and engineering rigor to every
            layer, from component API design to interaction prototyping to
            accessibility implementation. Comfortable working with design,
            product, and engineering equally.
          </p>
        </Reveal>
      </section>

      <section className="container">
        <div className="cv-section">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">§ Technical Skills</p>
                <h2 className="serif">
                  What's <span className="italic">in hand.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="disciplines-grid cv-skills-grid">
            {skills.map((group, i) => (
              <Reveal key={group.label} delay={i * 60} className="discipline">
                <p className="eyebrow">{group.label}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="cv-section">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">§ Experience</p>
                <h2 className="serif">
                  Ten years, <span className="italic">five rooms.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <ol className="cv-experience">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 40} as="li">
                <div className="cv-job-head">
                  <div>
                    <h4 className="serif">{job.role}</h4>
                    <p className="cv-job-company">
                      {job.company}
                      <span className="cv-dot">·</span>
                      {job.location}
                    </p>
                  </div>
                  <p className="cv-job-dates mono">{job.dates}</p>
                </div>
                {job.context && (
                  <p className="cv-job-context">{job.context}</p>
                )}
                <ul className="cv-job-bullets">
                  {job.bullets.map((bullet, bi) => (
                    <li key={bi}>{bullet}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container">
        <div className="cv-section cv-section-last">
          <Reveal>
            <div className="section-head">
              <div>
                <p className="eyebrow">§ Education</p>
                <h2 className="serif">
                  Where it <span className="italic">started.</span>
                </h2>
              </div>
            </div>
          </Reveal>

          <Reveal className="about-card cv-education-card">
            <ul className="about-card-list">
              {education.map((ed) => (
                <li key={ed.program}>
                  <span>
                    {ed.program}
                    {ed.detail && (
                      <span className="cv-education-detail">
                        {" "}
                        — {ed.detail}
                      </span>
                    )}
                  </span>
                  <span className="right">{ed.school}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Cv;
