function PracticalExperience({ formData, handleChange }) {
  return (
    <fieldset>
      <legend>Practical Experience</legend>

      <label htmlFor="companyName">Enter your company name</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        required
      />

      <label htmlFor="positionTitle">Enter your position title</label>
      <input
        type="text"
        id="positionTitle"
        name="positionTitle"
        value={formData.positionTitle}
        onChange={handleChange}
        required
      />

      <label htmlFor="responsibilities">Main responsibilities</label>
      <textarea
        id="responsibilities"
        name="responsibilities"
        value={formData.responsibilities}
        onChange={handleChange}
        rows={5}
        required
      />

      <label htmlFor="workStartDate">Employment start date</label>
      <input
        type="date"
        id="workStartDate"
        name="workStartDate"
        value={formData.workStartDate}
        onChange={handleChange}
        required
      />

      <label htmlFor="workEndDate">Employment end date</label>
      <input
        type="date"
        id="workEndDate"
        name="workEndDate"
        value={formData.workEndDate}
        onChange={handleChange}
        disabled={formData.currentlyWorking}
      />

      <label htmlFor="currentlyWorking">
        <input
          type="checkbox"
          id="currentlyWorking"
          name="currentlyWorking"
          checked={formData.currentlyWorking}
          onChange={handleChange}
        />
        I currently work here
      </label>
    </fieldset>
  );
}

export default PracticalExperience;