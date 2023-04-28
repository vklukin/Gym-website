const jwt = require('jsonwebtoken');
const GenerateTokens = require('../../utilities/tokens/GenerateTokens');
require('dotenv').config();

const Logout = require('../../../routes/post/auth/Logout');

const CookieJWTAuth = (app) => {
    return (req, res, next) => {
        const { AToken, RToken } = req.cookies;

        if (!RToken) return res.status(401).json({ message: 'Пользователь не авторизован' });
        if (!AToken) {
            jwt.verify(RToken, process.env.SECRET_KEY, (err, dec) => {
                if (err) {
                    Logout(app);
                    return res.status(400).json({ message: 'Вам необходимо аторизоваться!' });
                } else {
                    const accessToken = GenerateTokens.accessToken(
                        dec.id,
                        dec.name,
                        dec.email,
                        dec.role_id,
                        dec.createAt
                    );
                    res.cookie('AToken', accessToken, { httpOnly: true });
                }
                return next();
            });
        } else {
            jwt.verify(AToken, process.env.SECRET_KEY, (error, decode) => {
                if (error) {
                    jwt.verify(RToken, process.env.SECRET_KEY, (err, dec) => {
                        if (err) {
                            Logout(app);
                            return res
                                .status(400)
                                .json({ message: 'Вам необходимо аторизоваться!' });
                        } else {
                            const accessToken = GenerateTokens.accessToken(
                                dec.id,
                                dec.name,
                                dec.email,
                                dec.role_id,
                                dec.createAt
                            );
                            res.cookie('AToken', accessToken, { httpOnly: true });
                        }
                    });
                }
            });
            return next();
        }
    };
};

module.exports = CookieJWTAuth;
