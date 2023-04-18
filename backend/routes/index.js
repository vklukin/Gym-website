const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const UserLogin = require("./post/auth/User");
const Logout = require("./post/auth/Logout");
const CheckToken = require("./post/token/CheckToken");

module.exports = (app) => {
  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );
  app.use(bodyParser.json());
  app.use(cookieParser());

  // auth
  UserLogin(app);
  Logout(app);

  // tockens
  CheckToken(app);
};
