import { Link } from "react-router-dom";

export function Body() {
  return (
    <>
      <p>
        Good engineers get a lot of recruiting messages, and most of them look the same: an
        exciting opportunity, a fast-growing startup, a role that will shape the future of
        something. They get skimmed and archived. The messages that get a reply usually do one
        thing differently: they show you looked at the person's work.
      </p>

      <h2>1. Open on something they built</h2>
      <p>
        The first line is the only one you can be sure they will read. Use it to name a specific
        project, pull request or piece of code, and why it caught your attention. "Your lock-free
        matching engine in rt-order-matching caught my eye" beats any adjective about your company.
        It proves the message was written for them, and gives them a reason to keep reading.
      </p>

      <h2>2. Connect it to the problem you're hiring for</h2>
      <p>
        Then say, in one sentence, why that work matters to you: "We're building a trading system
        with similar latency challenges." Engineers care about interesting problems more than about
        titles. If the link between their project and your role is real, this sentence does the
        selling.
      </p>

      <h2>3. Keep it short</h2>
      <p>
        Three or four sentences. No company history, no list of benefits, no bullet points of
        requirements. If they're interested they will ask, and the conversation that follows is
        where those details belong.
      </p>

      <h2>4. Ask one easy question</h2>
      <p>
        End on a question that takes five seconds to answer: "Interested?" or "Open to a 20-minute
        call this week?" One ask, low commitment.
      </p>

      <h2>5. Skip the patterns that get archived</h2>
      <ul>
        <li>Subject lines with emojis, or with "exciting opportunity" in them.</li>
        <li>"I came across your profile" with nothing specific after it.</li>
        <li>Follow-ups that resurface the same generic pitch.</li>
        <li>Your funding round in the first line instead of their work.</li>
      </ul>

      <h2>Putting it together</h2>
      <blockquote>
        Hi Léa, your lock-free matching engine in rt-order-matching caught my eye. We're building a
        trading system with similar latency challenges and looking for a Rust engineer. Interested?
      </blockquote>
      <p>
        That's the whole email. It's short because the research happened before it was written.
      </p>
      <p>
        That research is the part Azerit does for you: it finds the engineers whose code matches
        your role and drafts each first email around their own work.{" "}
        <Link to="/try">Try it on one of your open roles</Link>.
      </p>
    </>
  );
}
