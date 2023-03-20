const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

module.exports = (app) => {
    app.use(
        cors({
            origin: "http://localhost:3000",
            credentials: true,
        })
    );
    app.use(bodyParser.json());
    app.use(cookieParser());

};
