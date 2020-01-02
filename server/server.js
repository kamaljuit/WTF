const dotenv = require("dotenv");

dotenv.config({
  path: "./dev-config.env"
});
const mongoose = require("mongoose");
const app = require("./app");

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      console.log("MongoDB Connection error");
      process.exit(0);
    }
    console.log("MongoDB connected Successfully");
  }
);

const port = process.env.PORT * 1;

app.listen(port, () => {
  console.log("Server running on port", process.env.PORT);
});
