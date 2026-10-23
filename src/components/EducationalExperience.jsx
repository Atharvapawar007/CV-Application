function EducationalExperience({ formData, handleChange }) {
  return (
    <fieldset>
      <legend>Educational Experience</legend>

      <label htmlFor="schoolName">
        Enter your school or institution name
      </label>
      <input
        type="text"
        id="schoolName"
        name="schoolName"
        value={formData.schoolName}
        onChange={handleChange}
        required
      />

      <label htmlFor="degree">Enter your degree or title of study</label>
      <input
        type="text"
        id="degree"
        name="degree"
        value={formData.degree}
        onChange={handleChange}
        required
      />

      <label htmlFor="studyStartDate">Study start date</label>
      <input
        type="date"
        id="studyStartDate"
        name="studyStartDate"
        value={formData.studyStartDate}
        onChange={handleChange}
        required
      />

      <label htmlFor="studyEndDate">Study end date</label>
      <input
        type="date"
        id="studyEndDate"
        name="studyEndDate"
        value={formData.studyEndDate}
        onChange={handleChange}
        disabled={formData.currentlyStudying}
      />

      <label htmlFor="currentlyStudying">
        <input
          type="checkbox"
          id="currentlyStudying"
          name="currentlyStudying"
          checked={formData.currentlyStudying}
          onChange={handleChange}
        />
        I am currently studying here
      </label>
    </fieldset>
  );
}

export default EducationalExperience;