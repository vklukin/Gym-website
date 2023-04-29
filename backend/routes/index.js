const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const UserLogin = require('./post/auth/Login');
const Logout = require('./post/auth/Logout');
const Registration = require('./post/auth/Registration');
const CheckToken = require('./post/token/CheckToken');

const GetUsers = require('./get/users/Users');
const EditUser = require('./get/users/EditUser');
const Workouts = require('./get/workouts/workouts');

const UpdateUser = require('./put/users/UpdateInfo');

const DeleteWorkout = require('./delete/workouts/DeleteWorkout');

module.exports = (app) => {
    app.use(
        cors({
            origin: 'http://localhost:3000',
            credentials: true,
        })
    );
    app.use(bodyParser.json());
    app.use(cookieParser());

    // POST
    // auth
    UserLogin(app);
    Logout(app);
    Registration(app);

    // tokens
    CheckToken(app);

    // GET
    GetUsers(app);
    EditUser(app);
    Workouts(app);

    // PUT
    UpdateUser(app);

    // DELETE
    DeleteWorkout(app);
};
