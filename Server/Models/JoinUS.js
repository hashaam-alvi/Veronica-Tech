const express = require("express");
const router = express.Router();
const db = require("../DB/DB_connection");

const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const uploadMiddleware = require("../config/uploadMiddleware");
const upload = uploadMiddleware("job-resumes");

router.post("/join-us-form", upload.single("resumeFile"), async (req, res) => {
//   console.log("Received form submission with data:");
  try {
    const {
      fullName,
      email,
      phoneNumber,
      portfolioUrl,
      linkedinUrl,
      departments,
      coverLetter,
    } = req.body;

    const resumeUrl = req.file.path;

    const query = `
        INSERT INTO job_applications
        (
          full_name,
          email,
          phone_number,
          portfolio_url,
          linkedin_url,
          departments,
          resume_file_path,
          cover_letter
        )
        VALUES
        ($1,$2,$3,$4,$5,$6,$7,$8)
      `;

    await db.none(query, [
      fullName,
      email,
      phoneNumber,
      portfolioUrl,
      linkedinUrl,
      JSON.parse(departments),
      resumeUrl,
      coverLetter,
    ]);

    res.status(201).json({
      success: true,
      message: "Application submitted successfully!",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});


router.get("/join-test", (req, res) => {
  res.send("Server IS live/join-us.js");
});

module.exports = router;
