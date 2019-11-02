const express = require("express");
const server = express();
const mongoose = require("mongoose");
const router = require("./routes/routes");

server.use(express.json());

mongoose.connect(
  "mongodb://aircnc:aircnc123@ds141198.mlab.com:41198/aircncdb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

server.use(router);

const port = process.env.PORT || 3333;

server.listen(port, () => console.log(`Server runnning in port ${port}`));
