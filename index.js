const cors = require("cors");
const express = require("express");
const app = express();

app.use(cors());
app.options("*", cors());

app.use("/", require("./routes"));

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`YT-App Listening on PORT 8080`));
