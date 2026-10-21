import { Email } from "./Email";
import { FOUNDERS } from "../links";
import luminePhoto from "../assets/lumine.webp";
import jacquesPhoto from "../assets/jacques.webp";

// The two founder cards, shared by the landing's team panel and /about.
export function Founders() {
  return (
    <div className="team-grid">
      <div className="member">
        <img src={luminePhoto} alt="Lumine Trentelivres" width="84" height="84" loading="lazy" />
        <div className="name">Lumine Trentelivres</div>
        <div className="bio">Co-founder. Centrale Supélec engineer, ex-sales.</div>
        <div className="links">
          <a href={FOUNDERS[0].linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>{" "}
          · <Email user="lumine" domain="azerit.tech">email</Email>
        </div>
      </div>
      <div className="member">
        <img src={jacquesPhoto} alt="Jacques Mougeot" width="84" height="84" loading="lazy" />
        <div className="name">Jacques Mougeot</div>
        <div className="bio">Co-founder. Centrale engineer, computer science research</div>
        <div className="links">
          <a href={FOUNDERS[1].linkedin} target="_blank" rel="noreferrer">
            linkedin
          </a>{" "}
          · <Email user="jacques" domain="azerit.tech">email</Email>
        </div>
      </div>
    </div>
  );
}
