function Form() {
  return (
    <form action="#">
      <fieldset>
        <legend>General Information</legend>

        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
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
            required
          />
        </div>

        <div className="field">
          <label htmlFor="study-date">Date of Study</label>
          <input type="date" id="study-date" name="studyDate" required />
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
            required
          />
        </div>

        <div className="field">
          <label htmlFor="work-from">Worked From</label>
          <input type="date" id="work-from" name="workFrom" required />
        </div>

        <div className="field">
          <label htmlFor="work-until">Worked Until</label>
          <input type="date" id="work-until" name="workUntil" required />
        </div>
      </fieldset>
    </form>
  );
}

export default Form;
