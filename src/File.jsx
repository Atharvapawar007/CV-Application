function formatDate(value, fallback) {
  if (!value) return fallback;

  return new Date(`${value}T00:00:00`).toLocaleDateString('en', {
    month: 'long',
    year: 'numeric',
  });
}

function File({ values }) {
  return (
    <article className="resume">
      <header className="resume-header">
        <h1 id="resume-name">{values.name || 'Alex Morgan'}</h1>
        <p id="resume-email">{values.email || 'alex.morgan@example.com'}</p>
        <p id="resume-phone">{values.phone || '123-4567'}</p>
      </header>

      <section className="resume-section">
        <h2>Education</h2>
        <h3 id="resume-school">{values.school || 'Example University'}</h3>
        <p id="resume-study">
          {values.study || 'Bachelor of Science in Computer Science'}
        </p>
        <p>
          <span id="resume-study-from">
            {formatDate(values.studyFrom, 'September 2020')}
          </span>{' '}
          –{' '}
          <span id="resume-study-until">
            {formatDate(values.studyUntil, 'May 2024')}
          </span>
        </p>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <h3 id="resume-position">
          {values.position || 'Software Developer'}
        </h3>
        <p id="resume-company">{values.company || 'Example Company'}</p>
        <p>
          <span id="resume-work-from">
            {formatDate(values.workFrom, 'June 2024')}
          </span>{' '}
          –{' '}
          <span id="resume-work-until">
            {formatDate(values.workUntil, 'Present')}
          </span>
        </p>
        <p id="resume-responsibilities">
          {values.responsibilities ||
            'Built and maintained web applications, collaborated with a cross-functional team, and improved product performance.'}
        </p>
      </section>
    </article>
  );
}

export default File;
