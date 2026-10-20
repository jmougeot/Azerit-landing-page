import { Link } from "react-router-dom";

export function Body() {
  return (
    <>
      <p>
        A CV is a list of claims: titles, years, a stack written as keywords. For engineers, most
        of the evidence of what they can actually do sits somewhere else, in the code they have
        published.
      </p>

      <h2>What a CV can't tell you</h2>
      <p>
        "Senior backend engineer, 6 years, Go, Kubernetes" fits thousands of profiles. It tells you
        where someone sat, not what they built. Two engineers with that exact line can have spent
        those years on very different things: one on a billing service, the other on a distributed
        queue that has to hold under load. If your role needs the second, the keyword match is
        noise.
      </p>

      <h2>What the code tells you</h2>
      <p>A public repository is a different kind of document. It shows:</p>
      <ul>
        <li>
          <b>What they build when nobody asks:</b> the topics of their projects, the problems they
          keep coming back to.
        </li>
        <li>
          <b>How they build it:</b> languages, dependencies, how the code is structured and tested.
        </li>
        <li>
          <b>How they work with others:</b> pull requests, code reviews, issues answered on projects
          they don't own.
        </li>
        <li>
          <b>Whether it's current:</b> a commit last week says more than a skill listed in 2019.
        </li>
      </ul>
      <p>None of this is self-reported. That's the point.</p>

      <h2>Matching on the work</h2>
      <p>
        When you open a role, you usually know the kind of system the person will build. So instead
        of searching for a title, we start from the role and look for developers who have already
        built something close: matching repository topics, languages and dependencies, and
        contributions that show depth rather than a weekend fork.
      </p>
      <p>
        Every candidate in an Azerit shortlist comes with the projects and contributions behind
        their score, so you can check the reasoning yourself in a minute instead of taking a number
        on trust.
      </p>

      <h2>What it doesn't do</h2>
      <p>
        Not every great engineer codes in public. Many spend their best years on private codebases,
        and plenty have neither the time nor the wish for side projects. A quiet GitHub profile is
        not a negative signal, and we don't treat it as one.
      </p>
      <p>
        Public code is a way to find people you would otherwise miss, and to start the conversation
        on something real. It doesn't replace your interviews.
      </p>

      <h2>Why it changes the first message</h2>
      <p>
        The biggest win isn't the search. Once you know what someone built, you finally have
        something worth saying to them. More on that in{" "}
        <Link to="/blog/first-email-engineers-answer">
          how to write a first email an engineer will answer
        </Link>
        .
      </p>
    </>
  );
}
