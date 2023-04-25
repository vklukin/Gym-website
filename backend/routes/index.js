const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const UserLogin = require('./post/auth/Login');
const Logout = require('./post/auth/Logout');
const Registration = require('./post/auth/Registration');
const CheckToken = require('./post/token/CheckToken');

module.exports = (app) => {
    app.use(
        cors({
            origin: 'http://localhost:3000',
            credentials: true,
        })
    );
    app.use(bodyParser.json());
    app.use(cookieParser());

    // auth
    UserLogin(app);
    Logout(app);
    Registration(app);

    // tokens
    CheckToken(app);
};
