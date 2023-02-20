const express = require("express");
const mongoose = require("mongoose");
const authJwt = require("./helpers/jwt");
const app = express();

app.use(express.json());
app.use(authJwt);

const users = require('./ROUTER/users');
app.use('/user',users);

mongoose.pluralize(null);
mongoose.set("strictQuery", true);

mongoose
  .connect("mongodb://localhost:27017/node_5")
  .then(() => console.log("connected!"))
  .catch((err) => {
    console.log(err);
  });

const PORT = 2007;
app.listen(PORT, () => {
  console.log(`server listen successfully: http://localhost:${PORT}`);
});
