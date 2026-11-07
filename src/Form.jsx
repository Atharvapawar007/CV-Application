function Form({ values, onChange }) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <fieldset>
        <legend>General Information</legend>

        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={values.name}
            onChange={onChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={values.email}
            onChange={onChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={values.phone}
            onChange={onChange}
            required
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Educational Experience</legend>

        <div className="field">
          <label htmlFor="school">School Name</label>
          <input
            type="text"
            id="school"
            name="school"
            placeholder="Enter your school name"
            value={values.school}
            onChange={onChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="study">Title of Study</label>
          <input
            type="text"
            id="study"
            name="study"
            placeholder="Enter your title of study"
            value={values.study}
            onChange={onChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="study-from">Study From</label>
          <input
            type="date"
            id="study-from"
            name="studyFrom"
            value={values.studyFrom}
            onChange={onChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="study-until">Study Until</label>
          <input
            type="date"
            id="study-until"
            name="studyUntil"
            value={values.studyUntil}
            onChange={onChange}
            required
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Practical Experience</legend>

        <div className="field">
          <label htmlFor="company">Company Name</label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Enter your company name"
            value={values.company}
            onChange={onChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="position">Position Title</label>
          <input
            type="text"
            id="position"
            name="position"
            placeholder="Enter your position title"
            value={values.position}
            onChange={onChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="responsibilities">Main Responsibilities</label>
          <textarea
            id="responsibilities"
            name="responsibilities"
            placeholder="Describe your main responsibilities"
            rows="4"
            value={values.responsibilities}
            onChange={onChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="work-from">Worked From</label>
          <input
            type="date"
            id="work-from"
            name="workFrom"
            value={values.workFrom}
            onChange={onChange}
            required
          />
        </div>

        <div className="field">
          <label htmlFor="work-until">Worked Until</label>
          <input
            type="date"
            id="work-until"
            name="workUntil"
            value={values.workUntil}
            onChange={onChange}
            required
          />
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
