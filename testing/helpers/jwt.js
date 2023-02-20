const { expressjwt } = require("express-jwt");

module.exports = expressjwt({
  secret: "dhruvik",
  algorithms: ["HS256"],
}).unless({ path: ["/user/login","/user/postuser"] });