const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const routes = require("./routes/routes");

const app = express();

mongoose.connect(
  "mongodb://aircnc:aircnc123@ds141198.mlab.com:41198/aircncdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server runnning in port ${port}`));
