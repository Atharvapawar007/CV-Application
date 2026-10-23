import { useState } from "react";
import GeneralInformation from "./components/GeneralInformation";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExperience";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",

    schoolName: "",
    degree: "",
    studyStartDate: "",
    studyEndDate: "",
    currentlyStudying: false,

    companyName: "",
    positionTitle: "",
    responsibilities: "",
    workStartDate: "",
    workEndDate: "",
    currentlyWorking: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("CV Form Data:", formData);
  }

  function handleReset() {
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",

      schoolName: "",
      degree: "",
      studyStartDate: "",
      studyEndDate: "",
      currentlyStudying: false,

      companyName: "",
      positionTitle: "",
      responsibilities: "",
      workStartDate: "",
      workEndDate: "",
      currentlyWorking: false,
    });
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <GeneralInformation
          formData={formData}
          handleChange={handleChange}
        />

        <EducationalExperience
          formData={formData}
          handleChange={handleChange}
        />

        <PracticalExperience
          formData={formData}
          handleChange={handleChange}
        />

        <button type="submit">Submit</button>
        <button type="reset">Reset Form</button>
      </form>
    </div>
  );
}

export default App;