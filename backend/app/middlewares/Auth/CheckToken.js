const jwt = require('jsonwebtoken');
const GenerateTokens = require('../../utilities/tokens/GenerateTokens');
require('dotenv').config();

const CookieJWTAuth = () => {
    return (req, res, next) => {
        const { AToken, RToken } = req.cookies;

        if (!RToken) return res.status(401).json({ message: 'Пользователь не авторизован' });

        jwt.verify(AToken, process.env.SECRET_KEY, (error, decode) => {
            if (error) {
                jwt.verify(RToken, process.env.SECRET_KEY, (err, dec) => {
                    if (err) {
                        if (err.message === 'jwt expired') {
                            const accessToken = GenerateTokens.accessToken(
                                dec.id,
                                dec.name,
                                dec.email,
                                dec.role_id,
                                dec.createAt
                            );
                            res.cookie('AToken', accessToken, { httpOnly: true });
                            return next();
                        } else {
                            return res
                                .status(406)
                                .json({ message: 'Произошла ошибка в refresh токене', err });
                        }
                    }
                });
            }

            return next();
        });
    };
};

module.exports = CookieJWTAuth;
