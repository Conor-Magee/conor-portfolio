
export default function ThreeSeatsProject() {
  return (
    <main className="projectPage">
      <section className="projectHero">
        <a className="backLink" href="/">
          ← Back to portfolio
        </a>

        <p className="eyebrow">FEATURED PROJECT</p>

        <h1>Three Seats</h1>

        <p className="projectIntro">
          A movie-night web application designed to make
          choosing what to watch together easier. Built
          around shared rooms, group participation and
          a Supabase-backed database.
        </p>

        <div className="techList">
          <span>Web Development</span>
          <span>Supabase</span>
          <span>Database Integration</span>
        </div>

        <div className="projectLinks">
          <a
            href="https://three-seats.vercel.app/"
            className="primaryButton"
            target="_blank"
            rel="noreferrer"
          >
            Launch App
          </a>
        </div>
      </section>

      <section className="caseStudySection">
        <h2>Three Opinions. One Movie.</h2>

        <div className="caseStudyMedia">
          <img
            src="/projects/three-seats/three-seats-roulette.gif"
            alt="Three Seats movie-night web application"
          />
        </div>

        <p>
          Three Seats was created around a familiar
          problem: deciding what to watch when everyone
          has different preferences.
        </p>

        <p>
          The application brings participants together
          in a shared room, providing a dedicated
          experience for choosing a movie as a group.
          Its interface focuses on making the process
          approachable and easy to navigate.
        </p>
      </section>

      <section className="caseStudySection">
        <h2>Features</h2>

        <div className="featureGrid">
          <div className="featureCard">
            <h3>Shared Movie Rooms</h3>
            <p>
              Organise movie-night participants into
              rooms, providing a shared space for
              making viewing decisions.
            </p>
          </div>

          <div className="featureCard">
            <h3>Group Participation</h3>
            <p>
              Display the members of a room and
              provide a group-focused experience
              rather than individual movie browsing.
            </p>
          </div>

          <div className="featureCard">
            <h3>Movie Selection</h3>
            <p>
              A dedicated movie-picking experience
              designed to help a group move from
              deciding what to watch to enjoying
              their movie night.
            </p>
          </div>

          <div className="featureCard">
            <h3>Supabase Integration</h3>
            <p>
              Uses Supabase as a backend database
              service, introducing persistent
              application data beyond the browser.
            </p>
          </div>

          <div className="featureCard">
            <h3>Room Switching</h3>
            <p>
              Provides navigation between movie
              rooms through a dedicated room-switching
              interface.
            </p>
          </div>

          <div className="featureCard">
            <h3>Web-Based Interface</h3>
            <p>
              Designed to run directly in a web
              browser, with an interface focused
              on clarity and ease of use.
            </p>
          </div>
        </div>
      </section>

      <section className="caseStudySection">
        <h2>How It Works</h2>

        <p>
          Three Seats combines a browser-based
          interface with Supabase database
          integration to support its movie-night
          experience.
        </p>

        <p>
          The interface organises participants
          into rooms and provides controls for
          selecting movies and switching between
          rooms. The backend introduces persistent
          data storage as part of the application
          architecture.
        </p>

        <p>
          The project demonstrates the process
          of connecting user-facing functionality
          to a hosted backend service, rather
          than building a purely static website.
        </p>
      </section>

      <section className="caseStudySection">
        <h2>What I Learned</h2>

        <p>
          Building Three Seats provided practical
          experience working with a hosted database
          and integrating backend services into
          a web application.
        </p>

        <p>
          The project also provided an opportunity
          to develop a user-focused interface,
          organise application functionality
          around a shared experience and work
          with persistent data.
        </p>
      </section>
    </main>
  );
}
