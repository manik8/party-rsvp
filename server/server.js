const express = require("express");
const app = express();

const connectDB = require("./config/db");
const PORT = process.env.PORT || 8888;

connectDB();

app.use(express.json({ extended: true }));

app.use("/register", require("./routes/register"));

app.use("/auth", require("./routes/auth"));

app.use("/guests", require("./routes/guests"));

if (process.env.NODE_env === "production") {
  app.use(express.static("../client/build"));
}
app.listen(PORT, () => console.log(`Server is Started at PORT ${PORT}`));
