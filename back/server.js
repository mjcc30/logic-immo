
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3000;
const hostname = "127.0.0.1";
const db = "immo";
const DBPORT = "27017";
const createRoutes = require("./routes/index.js");
const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(`mongodb://${hostname}:${DBPORT}/${db}`, { useNewUrlParser: true, useUnifiedTopology: true });
createRoutes(app);

app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});

