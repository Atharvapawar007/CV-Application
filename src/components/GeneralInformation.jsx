function GeneralInformation({ formData, handleChange }) {
  return (
    <fieldset>
      <legend>General Information</legend>

      <label htmlFor="name">Enter your name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        autoComplete="name"
        required
      />

      <label htmlFor="email">Enter your email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        autoComplete="email"
        required
      />

      <label htmlFor="phoneNumber">Enter your phone number</label>
      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        autoComplete="tel"
        required
      />
    </fieldset>
  );
}

export default GeneralInformation;