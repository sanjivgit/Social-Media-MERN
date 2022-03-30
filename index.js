const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");
const postsRotues = require("./routes/posts");

const app = express();
app.use(express.json());
dotenv.config();
app.use(helmet());
app.use(morgan("common"));

const port = process.env.PORT || 8800;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connnected to MongoDB"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello guys");
});

app.use("/api/auth", authRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/posts", postsRotues);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
