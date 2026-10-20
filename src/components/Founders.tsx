import { Email } from "./Email";
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
          <a href="https://www.linkedin.com/in/lumine-trentelivres/" target="_blank" rel="noreferrer">
            linkedin
          </a>{" "}
          · <Email user="lumine.builds" domain="gmail.com">email</Email>
        </div>
      </div>
      <div className="member">
        <img src={jacquesPhoto} alt="Jacques Mougeot" width="84" height="84" loading="lazy" />
        <div className="name">Jacques Mougeot</div>
        <div className="bio">Co-founder. Centrale engineer, computer science research</div>
        <div className="links">
          <a href="https://www.linkedin.com/in/jacquesmougeot/" target="_blank" rel="noreferrer">
            linkedin
          </a>{" "}
          · <Email user="jacques.mougeot" domain="centrale-med.fr">email</Email>
        </div>
      </div>
    </div>
  );
}
