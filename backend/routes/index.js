const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const UserLogin = require('./post/auth/Login');
const Logout = require('./post/auth/Logout');
const Registration = require('./post/auth/Registration');
const CheckToken = require('./post/token/CheckToken');
const AddRecord = require('./post/trainerSchedule/AddRecord');
const GetUsers = require('./get/users/Users');
const EditUser = require('./get/users/EditUser');
const Workouts = require('./get/workouts/workouts');
const UpdateUser = require('./put/users/UpdateInfo');
const DeleteWorkout = require('./delete/workouts/DeleteWorkout');
const Trainers = require('./get/trainers/Trainers');
const UsersForTrainers = require('./get/users/UsersForTrainers');
const TrainerWorkouts = require('./get/workouts/TrainerWorkouts');

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

    // workout
    AddRecord(app);

    // GET
    GetUsers(app);
    EditUser(app);
    Workouts(app);
    Trainers(app);
    UsersForTrainers(app);
    TrainerWorkouts(app);

    // PUT
    UpdateUser(app);

    // DELETE
    DeleteWorkout(app);
};
