const express = require("express");
const router = express.Router();
const db = require("../DB/DB_connection"); // Connects directly to your pg-promise pool instance

router.post("/collaborate", async (req, res) => {
    const { 
        fullName, 
        email, 
        phoneNumber, 
        companyName, 
        companyUrl, 
        services, 
        projectDetails 
    } = req.body;

    // Baseline validation check to match your structural form required tags
    if (!fullName || !email || !phoneNumber || !companyName || !services || !projectDetails) {
        return res.status(400).json({ 
            success: false, 
            message: "Required dynamic form parameters are missing." 
        });
    }

    try {
        const queryStr = `
            INSERT INTO client_collaborations 
            (full_name, email, phone_number, company_name, company_url, services, project_details) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) 
            RETURNING id, created_at;
        `;

        // pg-promise securely serializes JavaScript arrays directly into SQL TEXT[] formats
        const newCollaboration = await db.one(queryStr, [
            fullName,
            email,
            phoneNumber,
            companyName,
            companyUrl || null, // Stores an explicit NULL token if string is blank
            services,
            projectDetails.trim()
        ]);

        return res.status(201).json({
            success: true,
            message: "Collaboration request submitted successfully!",
            data: { id: newCollaboration.id }
        });

    } catch (error) {
        console.error("Database Save failure exception error logs:", error);
        return res.status(500).json({
            success: false,
            message: "An internal server error occurred while processing your request."
        });
    }
});

router.get("/users", (req,res) => {
    res.send("Server IS live/client_collaborations.js");
});

module.exports = router;
