const jwt = require('jsonwebtoken');

const { ROLE_NAMES } = require('../../constants/RoleConstant');

module.exports = (roles) => {
    return (req, res, next) => {
        const { RToken } = req.cookies;
        const decode = jwt.decode(RToken);

        if (!roles.includes(ROLE_NAMES[decode.role_id])) {
            return res
                .status(403)
                .json({ message: 'У вас нет прав на совершение этого действия!' });
        }

        return next();
    };
};
