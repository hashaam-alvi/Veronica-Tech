const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, './') })
const express = require("express");
const app = express();
const cors = require("cors");
// const users = require("./models/users");
const client_collaborations  = require("./Models/client_collaborations");
const JoinUS  = require("./Models/JoinUS");

const db = require("./DB/DB_connection");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://veronica-tech.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/", client_collaborations);
app.use("/", JoinUS);

app.get("/", (req , res)=>{
  res.send("at Default Root")
})
