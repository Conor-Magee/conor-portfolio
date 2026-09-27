export default function HatchHavenProject() {
  return (
    <main className="projectPage">
      <section className="projectHero">
        <a className="backLink" href="/">
          ← Back to portfolio
        </a>

        <p className="eyebrow">FEATURED PROJECT</p>

        <h1>Hatch Haven</h1>

        <p className="projectIntro">
          A cosy pet-raising idle/clicker game built from scratch in Godot 4,
          combining pet collection, progression, autonomous behaviour and
          persistent idle-game systems.
        </p>

        <div className="techList">
          <span>Godot 4</span>
          <span>GDScript</span>
          <span>Game Development</span>
        </div>

        <div className="projectLinks">
          <a
            href="https://hatch-haven.vercel.app/"
            className="primaryButton"
            target="_blank"
            rel="noreferrer"
          >
            Play Game
          </a>

          <a
            href="https://github.com/Conor-Magee/hatch-haven"
            className="secondaryButton"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>
      </section>

      <section className="caseStudySection">
        <h2>Hatch, Raise, Progress</h2>

        <div className="caseStudyMedia">
          <img
            src="/projects/hatch-haven/lounge_demo.png"
            alt="Hatch Haven gameplay"
          />
        </div>

        <p>
          Players hatch eggs to discover new pets, raise their happiness and
          build a growing collection. Each completed pet permanently
          contributes to progression through unique bonuses and passive
          abilities.
        </p>
      </section>

      <section className="caseStudySection">
        <h2>Features</h2>

        <div className="featureGrid">
          <div className="featureCard">
            <h3>Pet Progression</h3>
            <p>
              Pets can be raised and levelled, with milestone levels unlocking
              permanent bonuses that contribute to future progression.
            </p>
          </div>

          <div className="featureCard">
            <h3>Autonomous Lounge</h3>
            <p>
              Collected pets live together in the Lounge where they
              independently wander, idle and sleep using state-based behaviour.
            </p>
          </div>

          <div className="featureCard">
            <h3>Idle Economy</h3>
            <p>
              Owned pets generate coins over time, including calculated
              offline earnings when the player returns to the game.
            </p>
          </div>

          <div className="featureCard">
            <h3>Persistent Progress</h3>
            <p>
              Pet ownership, levels, resources and progression are saved so
              the player's haven persists between sessions.
            </p>
          </div>

          <div className="featureCard">
            <h3>Data-Driven Pets</h3>
            <p>
              Pet stats, textures and bonuses are defined through reusable
              resources, making new pets easier to add without duplicating
              game logic.
            </p>
          </div>

          <div className="featureCard">
            <h3>Playable Web Build</h3>
            <p>
              The Godot project is exported for the web and deployed through
              Vercel, allowing the game to be played directly in a browser.
            </p>
          </div>
        </div>
      </section>

      <section className="caseStudySection">
        <h2>How It Works</h2>

        <p>
          Hatch Haven separates permanent pet data from each player's owned
          pet state. Pet resources define properties such as hatch
          requirements, abilities and milestone bonuses, while owned pets
          track individual happiness and level progression.
        </p>

        <p>
          The Lounge uses independent pet instances with asynchronous
          behaviour to switch between wandering, idling and sleeping while
          keeping each pet's visual state synchronised.
        </p>

        <p>
          Passive and offline income is calculated from the player's complete
          pet collection, allowing newly unlocked pets and milestone upgrades
          to contribute to the wider game economy.
        </p>
      </section>

      <section className="caseStudySection">
        <h2>What I Learned</h2>

        <p>
          Hatch Haven has been an exercise in building a larger project from
          small reusable systems rather than treating each feature in
          isolation. Adding progression, saving, offline earnings, autonomous
          pets and UI state required those systems to share data reliably.
        </p>

        <p>
          Developing a browser version also introduced a complete deployment
          workflow: exporting the Godot project for the web, maintaining the
          source with Git and GitHub, and deploying playable builds through
          Vercel.
        </p>
      </section>
    </main>
  );
}