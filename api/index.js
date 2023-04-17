const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserModel = require("./models/User");
const cors = require('cors');
const jwt = require("jsonwebtoken");

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL);

const port = process.env.PORT || 4000;
const jwtSecret = process.env.JWT_SECRET;

app.use(cors({
    credentials:true,
    origin:process.env.CLIENT_URL,
  })
);
app.use(express.json())


app.get("/test", (req, res) => {
  res.json("Test Ok");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const createdUser = await UserModel.create({ username, password });
  } catch (error) {
    if (error) console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
