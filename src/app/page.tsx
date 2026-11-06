export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="logo" href="#">
          CM<span>.</span>
        </a>

        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="eyebrow">HELLO, I'M</p>

        <h1>
          Conor <span>Magee.</span>
        </h1>

        <h2>Software Developer & QA Engineer</h2>

        <p className="heroText">
          Computer Science graduate with experience in QA automation, 
          software testing and data-driven operational roles. 
          I enjoy solving technical problems and building practical software projects with modern development tools
        </p>

        <div className="heroButtons">
          <a className="primaryButton" href="#projects">
            View My Work
          </a>

          <a className="secondaryButton" href="#contact">
            Contact Me
          </a>
        </div>
      </section>

      <section className="projectsSection" id="projects">
  <div className="sectionHeading">
    <p className="eyebrow">FEATURED WORK</p>
    <h2>Projects</h2>
    <p>
      A selection of projects I&apos;ve built while developing my
      programming, testing and automation skills.
    </p>
  </div>

  <div className="projectsGrid">
    <article className="projectCard">
      <div className="projectImage">
        <img
          src="/projects/whack-a-mole/gameplay.gif"
          alt="Whack-a-Mole game running on an Elgato Stream Deck"
          />
      </div>

      <div className="projectContent">
        <p className="projectNumber">01</p>

        <h3>Whack-a-Mole for Stream Deck</h3>

        <p>
          A fully playable arcade-style mini-game built for the Elgato
          Stream Deck, featuring randomised spawning, combo scoring,
          progressive difficulty, special moles, bombs and persistent
          high scores.
        </p>

        <div className="techList">
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Stream Deck SDK</span>
        </div>

        <div className="projectLinks">
          <a
            href="/projects/whack-a-mole"
            className="primaryButton"
          >
            View Project
          </a>

          <a
            href="https://github.com/Conor-Magee/streamdeck-whack-a-mole"
            className="secondaryButton"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
    <article className="projectCard">
  <div className="projectImage">
    <img
      src="/projects/hatch-haven/lounge_demo.png"
      alt="Hatch Haven pet-raising game"
    />
  </div>

  <div className="projectContent">
    <p className="projectNumber">02</p>

    <h3>Hatch Haven</h3>

    <p>
      A cosy pet-raising idle/clicker game built in Godot 4,
      featuring collectible pets, progression, autonomous behaviour,
      passive income, offline earnings and persistent saves.
    </p>

    <div className="techList">
      <span>Godot 4</span>
      <span>GDScript</span>
      <span>Game Development</span>
    </div>

    <div className="projectLinks">
      <a
        href="/projects/hatch-haven"
        className="primaryButton"
      >
        View Project
      </a>

      <a
        href="https://hatch-haven.vercel.app/"
        className="secondaryButton"
        target="_blank"
        rel="noreferrer"
      >
        Play Game
      </a>
    </div>
  </div>
</article>

<article className="projectCard">
  <div className="projectImage">
    <img
      src="/projects/three-seats/ts-demo.png"
      alt="Three Seats game screenshot"
    />
  </div>

  <div className="projectContent threeSeatsContent">
    <p className="projectNumber">03</p>

    <h3>Three Seats</h3>

    <p>
      A web-based application featuring a Supabase-backed
      database, built as a practical project exploring
      full-stack development, application state
      management and persistent data.
    </p>

    <div className="techList">
      <span>Supabase</span>
      <span>Database Integration</span>
      <span>Web Development</span>
    </div>

    <div className="projectLinks">
      <a
        href="/projects/three-seats"
        className="primaryButton"
      >
        View Project
      </a>

      <a
        href="https://three-seats.vercel.app/"
        className="secondaryButton"
        target="_blank"
        rel="noreferrer"
      >
        Launch App
      </a>
    </div>
  </div>
</article>

  </div>
</section>

<section className="aboutSection" id="about">
  <div className="sectionHeading">
    <p className="eyebrow">ABOUT ME</p>
    <h2>Background</h2>
  </div>

  <div className="aboutGrid">
    <div className="aboutText">
      <p>
        I&apos;m a Computer Science graduate with experience across software
        testing, automation, data analysis and operational technology.
      </p>

      <p>
        Earlier in my career I worked in QA automation, using tools including
        Selenium, Postman and SQL while contributing to software testing and
        migration projects.
      </p>

      <p>
        More recently, I&apos;ve been rebuilding and expanding my development
        skills through practical projects using TypeScript, Node.js and modern
        web technologies.
      </p>
    </div>

    <div className="skillsPanel">
      <h3>Core Skills</h3>

      <div className="skillsList">
        <span>TypeScript</span>
        <span>JavaScript</span>
        <span>Node.js</span>
        <span>Next.js</span>
        <span>HTML / CSS</span>
        <span>SQL</span>
        <span>Selenium</span>
        <span>Postman</span>
        <span>Git / GitHub</span>
        <span>Software Testing</span>
      </div>
    </div>
  </div>
</section>


<section className="beyondSection" aria-labelledby="beyond-heading">
  <div className="sectionHeading">
    <p className="eyebrow">A LITTLE MORE ABOUT ME</p>
    <h2 id="beyond-heading">Beyond the Code</h2>
    <p>
      Outside of software development, I enjoy competition,
      exploring new places and spending time with the people
      who matter most.
    </p>
  </div>

  <div className="beyondGrid">
    
<article className="interestCard interestFeatured">
  <div className="interestHeader">
    <span className="interestIcon" aria-hidden="true">🏆</span>
    <h3>Competitive Gaming &amp; Leadership</h3>
  </div>

  <div className="achievementStats">
    <div>
      <strong>#70</strong>
      <span>Peak World Rank</span>
    </div>

    <div>
      <strong>Top 0.35%</strong>
      <span>Estimated Worldwide</span>
    </div>

    <div>
      <strong>Top 200</strong>
      <span>Multiple Years</span>
    </div>
  </div>

  <p>
    I competed at an elite international level in World of
    Warcraft&apos;s most challenging team-based content,
    achieving a peak ranking of 70th worldwide among an
    estimated 20,000 competitive guilds.
  </p>

  <p>
    Over several years, I consistently competed within the
    world&apos;s Top 200, taking on various leadership
    responsibilities, analysing detailed performance data
    to identify areas for improvement, and contributing to
    the development and execution of complex team strategies.
  </p>

  <p>
    This experience strengthened my leadership, analytical
    problem-solving, strategic planning and communication
    skills, while demonstrating the dedication and consistency
    required to perform at a high level.
  </p>

  <div className="interestTags">
    <span>Leadership</span>
    <span>Performance Analysis</span>
    <span>Strategic Planning</span>
    <span>Teamwork</span>
  </div>
</article>


    <article className="interestCard">
      <div className="interestHeader">
        <span className="interestIcon" aria-hidden="true">⚽</span>
        <h3>Sport &amp; Competition</h3>
      </div>

      <p>
        I enjoy following sport and the excitement that comes
        with competition. Whether it&apos;s a big sporting
        event or following the progress of a team, I appreciate
        the determination, teamwork and unpredictability
        that make sport so enjoyable.
      </p>
    </article>

    <article className="interestCard">
      <div className="interestHeader">
        <span className="interestIcon" aria-hidden="true">🧭</span>
        <h3>Family &amp; Adventures</h3>
      </div>

      <p>
        I love spending time with my girlfriend, our son
        and our dog. We enjoy exploring new places, taking
        trips and finding fun activities to experience
        together, whether that&apos;s a holiday abroad,
        a day out or simply getting outdoors.
      </p>
    </article>
  </div>
</section>


<section className="experienceSection" id="experience">
  <div className="sectionHeading">
    <p className="eyebrow">EXPERIENCE</p>
    <h2>Career</h2>
  </div>

  <div className="timeline">
    <article className="timelineItem">
      <div className="timelineDate">Current</div>

      <div className="timelineContent">
        <h3>Real Time Analyst</h3>
        <p className="timelineCompany">
          Workforce Management / Operations
        </p>

        <p>
          Working with workforce-management systems, reporting, intraday
          analysis, scheduling data and operational performance. I regularly
          use data and automation to improve visibility and reduce manual work.
        </p>
      </div>
    </article>

    <article className="timelineItem">
      <div className="timelineDate">Previous</div>

      <div className="timelineContent">
        <h3>QA Automation Engineer</h3>
        <p className="timelineCompany">
          Automated Intelligence
        </p>

        <p>
          Worked with automated and manual software testing, including
          Selenium, Postman and SQL, alongside testing activities for software
          and migration projects.
        </p>
      </div>
    </article>
  </div>
</section>

<section className="contactSection" id="contact">
  <div className="sectionHeading">
    <p className="eyebrow">GET IN TOUCH</p>
    <h2>Contact</h2>
    <p>
      I&apos;m currently open to opportunities in software development,
      QA and automation-focused roles.
    </p>
  </div>

  <div className="contactGrid">
    <div className="contactCard">
      <p className="contactLabel">EMAIL</p>
      <a href="mailto:conor.magee@outlook.com">
        conor.magee@outlook.com
      </a>
    </div>

    <div className="contactCard">
      <p className="contactLabel">GITHUB</p>
      <a
        href="https://github.com/Conor-Magee"
        target="_blank"
        rel="noreferrer"
      >
        github.com/Conor-Magee
      </a>
    </div>

    <div className="contactCard">
      <p className="contactLabel">LINKEDIN</p>
      <a
        href="https://www.linkedin.com/in/conormagee33/"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn Profile
      </a>
    </div>
  </div>

  <div className="cvCallout">
    <div>
      <p className="eyebrow">CURRICULUM VITAE</p>
      <h3>Want the full picture?</h3>
      <p>
        Download my CV for a detailed overview of my experience,
        technical skills and employment history.
      </p>
    </div>

    <a
      href="/cv/conor-magee-cv.pdf"
      className="primaryButton"
      download
    >
      Download CV
    </a>
  </div>
</section>

<footer className="footer">
  <p>© 2026 Conor Magee</p>

  <p>
    Built with Next.js and TypeScript.
  </p>
</footer>
    </main>
  );
}