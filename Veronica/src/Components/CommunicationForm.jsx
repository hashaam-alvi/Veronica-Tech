import "./Styles/CommunicationForm.css";
import { useState } from "react";
import {BASE_URL} from "../config";
import axios from "axios";

export default function CommunicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyUrl: "",
    services: [],
    projectDetails: "",
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedServices = checked
        ? [...prev.services, value] // Add item if checked
        : prev.services.filter((service) => service !== value); // Remove if unchecked
      return { ...prev, services: updatedServices };
    });
  };

  {/*let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      companyName: "",
      companyUrl: "",
      services: [],
      projectDetails: "",
    });
  };*/}

  let handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.post(
      `${BASE_URL}/collaborate`,
      formData
    );

    if (response.data.success) {
      alert("Request submitted successfully!");

      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        companyUrl: "",
        services: [],
        projectDetails: "",
      });
    }
  } catch (error) {
    console.error("Submission failed:", error);

    alert(
      error.response?.data?.message ||
      "A network error occurred."
    );
  }
};

  // const todayStr = new Date().toISOString().split("T")[0];
  // const twoDaysAgo = new Date();
  // twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  // const minDateStr = twoDaysAgo.toISOString().split("T")[0];

  return (
    <>
      {/* <Header /> */}
      <div className="commForm">
        <h1 style={{ textAlign: "center", margin: "25px 0", color: "#00387a" }}>
          Lets Collaborate
        </h1>

        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="row1 rows">
            <label htmlFor="fullName">Full Name*</label>
            <input
              onChange={handleInputChange}
              type="text"
              value={formData.fullName}
              id="fullName"
              name="fullName"
              required
            />
          </div>

          {/* Email */}
          <div className="row2 rows">
            <label htmlFor="email">Email*</label>
            <input
              onChange={handleInputChange}
              type="email"
              value={formData.email}
              id="email"
              name="email"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="row3 rows">
            <label htmlFor="phoneNumber">Phone Number*</label>
            <input
              onChange={handleInputChange}
              type="tel"
              //   placeholder="(201) 555-0123"
              value={formData.phoneNumber}
              id="phoneNumber"
              name="phoneNumber"
              required
            />
          </div>

          {/* Company Name */}
          <div className="row4 rows">
            <label htmlFor="companyName">Company Name*</label>
            <input
              onChange={handleInputChange}
              type="text"
              value={formData.companyName}
              id="companyName"
              name="companyName"
              required
            />
          </div>

          {/* Company URL */}
          <div className="row5 rows">
            <label htmlFor="companyUrl">Company URL</label>
            <input
              onChange={handleInputChange}
              type="url"
              value={formData.companyUrl}
              id="companyUrl"
              name="companyUrl"
            />
          </div>

          {/* Services Checkboxes */}
          <div className="row7 rows-checkbox-group">
            <label>Services you are looking for*</label>
            <div className="checkbox-container">
              {[
                "Remote IT Resources",
                "Custom Software Development",
                "Web Development",
                "Mobile App Development",
                "AR/VR",
                "Gaming",
                "Cyber Security",
                "Other IT Services",
              ].map((service) => (
                <label key={service} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="services"
                    value={service}
                    checked={formData.services?.includes(service)}
                    onChange={handleCheckboxChange} // Requires a checkbox handler
                  />
                  {service} <br />
                </label>
              ))}
            </div>
          </div>

          {/* Project Details */}
          <div className="row8 rows">
            <label htmlFor="projectDetails">Project Details*</label>
            <textarea
              onChange={handleInputChange}
              value={formData.projectDetails || " "}
              id="projectDetails"
              name="projectDetails"
              rows="4"
              required
            />
          </div>

          {/* Submit Button Container */}
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
