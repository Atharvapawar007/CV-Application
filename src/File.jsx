function File() {
  return (
    <article className="resume">
      <header className="resume-header">
        <h1 id="resume-name">Alex Morgan</h1>
        <p id="resume-email">alex.morgan@example.com</p>
        <p id="resume-phone">123-4567</p>
      </header>

      <section className="resume-section">
        <h2>Education</h2>
        <h3 id="resume-school">Example University</h3>
        <p id="resume-study">Bachelor of Science in Computer Science</p>
        <p id="resume-study-date">September 2020 – May 2024</p>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <h3 id="resume-position">Software Developer</h3>
        <p id="resume-company">Example Company</p>
        <p>
          <span id="resume-work-from">June 2024</span> –{' '}
          <span id="resume-work-until">Present</span>
        </p>
        <p id="resume-responsibilities">
          Built and maintained web applications, collaborated with a
          cross-functional team, and improved product performance.
        </p>
      </section>
    </article>
  );
}

export default File;
