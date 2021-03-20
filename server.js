const express = require("express");
const app = express();

const dbConnect = require("./config/connectDB");

require("dotenv").config();

dbConnect();
// middleware routing body parser
app.use(express.json());
app.use("/api/contact", require("./routes/contacts"));

const PORT = process.env.PORT;
app.listen(PORT, (err) =>
  err
    ? console.error(err)
    : console.log(`Server is running on  http://localhost:${PORT}..`)
);
