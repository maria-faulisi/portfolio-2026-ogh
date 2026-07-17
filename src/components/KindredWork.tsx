import { Link } from "react-router-dom";
import { getKindred, type WorkId } from "../data/work";

type Props = {
  fromId: WorkId;
};

const KindredWork = ({ fromId }: Props) => {
  const kindred = getKindred(fromId);

  return (
    <section className="kindred">
      <div className="container">
        <div className="kindred-head">
          <p className="eyebrow">Kindred Work</p>
          <h3 className="serif">
            <span className="italic">Work that</span> rhymes with this.
          </h3>
          <p className="caption">
            Two adjacent case studies, one from the same company, one sharing
            the same way of seeing.
          </p>
        </div>
        <ul className="kindred-grid">
          {kindred.map((k) => (
            <li key={k.id} className="kindred-card-wrap">
              <Link to={k.work.href} className="kindred-card">
                <div className="kindred-card-meta">
                  <span className="mono micro">
                    {k.work.index} · {k.work.discipline}
                  </span>
                  <span className="mono micro">{k.work.company}</span>
                </div>
                <h4 className="serif kindred-card-title">{k.work.title}</h4>
                <p className="kindred-card-reason">
                  <span className="eyebrow">Why</span>
                  <span>{k.reason}</span>
                </p>
                <span className="kindred-card-cta">
                  Read the case
                  <span className="cta-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default KindredWork;
