const jwt = require('jsonwebtoken');

module.exports = (roles) => {
    return (req, res, next) => {
        const { AToken } = req.cookies;
        const decode = jwt.decode(AToken);

        if (roles.includes(decode.role_id)) {
            return next();
        }

        return res.status(403).json({ message: 'У вас нет прав на совершение этого действия!' });
    };
};
