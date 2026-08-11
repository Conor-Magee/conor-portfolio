export default function WhackAMoleProject() {
  return (
    <main className="projectPage">
      <section className="projectHero">
        <a className="backLink" href="/">
          ← Back to portfolio
        </a>

        <p className="eyebrow">FEATURED PROJECT</p>

        <h1>Whack-a-Mole for Stream Deck</h1>

        <p className="projectIntro">
          A fully playable arcade-style Whack-a-Mole game built for the
          Elgato Stream Deck using TypeScript, Node.js and the Stream Deck SDK.
        </p>

        <div className="techList">
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Stream Deck SDK</span>
        </div>

        <div className="projectLinks">
          <a
            href="https://github.com/Conor-Magee/streamdeck-whack-a-mole"
            className="primaryButton"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>
      </section>

      <section className="caseStudySection">
        <h2>Gameplay</h2>

        <div className="caseStudyMedia">
          <img
            src="/projects/whack-a-mole/gameplay.gif"
            alt="Whack-a-Mole gameplay running on an Elgato Stream Deck"
          />
        </div>

        <p>
          The game transforms the physical keys of a Stream Deck into a
          dynamic playfield. Mole actions register themselves at runtime,
          allowing the game to randomly select from whatever playable holes
          are currently available.
        </p>
      </section>

      <section className="caseStudySection">
        <h2>Physical Hardware Demo</h2>

        <div className="caseStudyMedia">
            <img
                src="/projects/whack-a-mole/hardware-demo.gif"
                alt="Whack-a-Mole being played on the physical Elgato Stream Deck"
            />
        </div>

  <p>
    The game is played directly on the physical Stream Deck hardware.
    Each key acts as part of the game board, with presses sent back to
    the plugin in real time.
  </p>
</section>

      <section className="caseStudySection">
        <h2>Features</h2>

        <div className="featureGrid">
          <div className="featureCard">
            <h3>Dynamic Playfield</h3>
            <p>
              Hole actions register dynamically instead of relying on
              hard-coded key positions.
            </p>
          </div>

          <div className="featureCard">
            <h3>Progressive Difficulty</h3>
            <p>
              Mole speed increases as the score rises, with higher bomb
              probabilities at later stages.
            </p>
          </div>

          <div className="featureCard">
            <h3>Combo System</h3>
            <p>
              Consecutive hits build score multipliers and trigger a special
              fire mode at high streaks.
            </p>
          </div>

          <div className="featureCard">
            <h3>Special Moles</h3>
            <p>
              Golden moles award bonus points, time moles add seconds, and
              bombs punish careless hits.
            </p>
          </div>

          <div className="featureCard">
            <h3>Persistent Best Score</h3>
            <p>
              High scores are stored using Stream Deck global settings and
              survive application restarts.
            </p>
          </div>

          <div className="featureCard">
            <h3>Final Frenzy</h3>
            <p>
              The last five seconds accelerate dramatically to create a
              frantic finish to every round.
            </p>
          </div>
        </div>
      </section>

      <section className="caseStudySection">
        <h2>How It Works</h2>

        <p>
          The project uses shared game state to keep the playable holes,
          score display, timer, start button and best-score display
          synchronised.
        </p>

        <p>
          Asynchronous timers control mole lifetimes and allow successful
          hits to interrupt the current wait period, causing the next mole
          to spawn almost immediately.
        </p>

        <p>
          Each spawn is assigned a mutually exclusive type using probability
          logic, while the current score and combo determine difficulty and
          visual state.
        </p>
      </section>

      <section className="caseStudySection">
        <h2>What I Learned</h2>

        <p>
          This project started as an experiment with updating Stream Deck key
          images and gradually evolved into a complete mini-game. Building it
          involved working with asynchronous TypeScript, shared state,
          probability-based behaviour, persistent settings, hardware events
          and iterative play-testing.
        </p>
      </section>
    </main>
  );
}