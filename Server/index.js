const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, '../') })
const express = require("express");
const app = express();
const cors = require("cors");
// const users = require("./models/users");
const client_collaborations  = require("./Models/client_collaborations");

const db = require("./DB/DB_connection");

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://yourfrontend.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

app.use(express.json());

// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:5173", "https://veronica-tech.vercel.app/"],
//   },
//   transports: ["websocket", "polling"],
// });

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/", client_collaborations);
// app.use("/", rooms);

app.get("/", (req , res)=>{
  res.send("at Default Root")
})
