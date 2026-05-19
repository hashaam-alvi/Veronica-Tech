import "../Styles/CommunicationForm.css"; 
import { useState } from "react";

export default function JoinUsForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    portfolioUrl: "",
    linkedinUrl: "",
    departments: [],
    experienceLevel: "",
    resumeFile: null,
    coverLetter: "",
  });

  const handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedDepartments = checked
        ? [...prev.departments, value] // Add department structural tag
        : prev.departments.filter((dept) => dept !== value); // Remove if unchecked
      return { ...prev, departments: updatedDepartments };
    });
  };

  const handleFileChange = (event) => {
    setFormData((prev) => {
      return { ...prev, resumeFile: event.target.files[0] };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // For handling live files/documents alongside strings, developers use FormData API:
    const dataToSend = new FormData();
    dataToSend.append("fullName", formData.fullName);
    dataToSend.append("email", formData.email);
    dataToSend.append("phoneNumber", formData.phoneNumber);
    dataToSend.append("portfolioUrl", formData.portfolioUrl);
    dataToSend.append("linkedinUrl", formData.linkedinUrl);
    dataToSend.append("coverLetter", formData.coverLetter);
    dataToSend.append("departments", JSON.stringify(formData.departments));
    if (formData.resumeFile) {
      dataToSend.append("resume", formData.resumeFile);
    }

    console.log("Submitting Application Data Payload:");
    // For debugging console logs with multipart FormData, map entries:
    for (let pair of dataToSend.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    // Resetting states accurately back to raw fields
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      portfolioUrl: "",
      linkedinUrl: "",
      departments: [],
      resumeFile: null,
      coverLetter: "",
    });
    
    // Reset structural file input element visual values manually
    document.getElementById("resumeFile").value = "";
  };

  return (
    <>
      <div className="commForm">
        <h1 style={{ textAlign: "center", margin: "25px 0", color: "#00387a" }}>
          Join Our Team
        </h1>

        <form onSubmit={handleSubmit} encType="multipart/form-data">
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
            <label htmlFor="email">Email Address*</label>
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
              value={formData.phoneNumber}
              id="phoneNumber"
              name="phoneNumber"
              required
            />
          </div>

          {/* Portfolio Link URL */}
          <div className="row5 rows">
            <label htmlFor="portfolioUrl">Portfolio / GitHub URL</label>
            <input
              onChange={handleInputChange}
              type="url"
              value={formData.portfolioUrl}
              id="portfolioUrl"
              name="portfolioUrl"
              placeholder="https://github.com"
            />
          </div>

          {/* LinkedIn Profile URL */}
          <div className="row6 rows">
            <label htmlFor="linkedinUrl">LinkedIn Profile URL*</label>
            <input
              onChange={handleInputChange}
              type="url"
              value={formData.linkedinUrl}
              id="linkedinUrl"
              name="linkedinUrl"
              placeholder="https://linkedin.com"
              required
            />
          </div>

          {/* Departments Interest Checkboxes */}
          <div className="row7 rows-checkbox-group">
            <label>Departments you are interested in joining*</label>
            <div className="checkbox-container">
              {[
                "Frontend Development",
                "Backend Development",
                "Mobile App Development",
                "UI/UX Design",
                "Game Development",
                "Cyber Security Specialist",
                "SQA Engineering",
                "Project Management / HR",
              ].map((dept) => (
                <label key={dept} className="checkbox-label">
                  <input
                    type="checkbox"
                    name="departments"
                    value={dept}
                    checked={formData.departments?.includes(dept)}
                    onChange={handleCheckboxChange}
                  />
                  {dept} <br />
                </label>
              ))}
            </div>
          </div>

          {/* Resume Upload Box File Handle */}
          <div className="row8 rows">
            <label htmlFor="resumeFile">Upload Resume (PDF, DOCX)*</label>
            <input
              onChange={handleFileChange}
              type="file"
              id="resumeFile"
              name="resumeFile"
              accept=".pdf,.docx"
              required
              style={{ border: "none", paddingLeft: "0" }}
            />
          </div>

          {/* Cover Letter / Notes */}
          <div className="row9 rows">
            <label htmlFor="coverLetter">Why do you want to join us?*</label>
            <textarea
              onChange={handleInputChange}
              value={formData.coverLetter}
              id="coverLetter"
              name="coverLetter"
              rows="4"
              placeholder="Tell us about your technical stack and career goals..."
              required
            />
          </div>

          {/* Submit Button */}
          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
