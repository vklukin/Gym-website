const jwt = require('jsonwebtoken');
require('dotenv').config();

const GenerateTokens = require('../../../app/utilities/tokens/GenerateTokens');
const { ROLE_NAMES } = require('../../../app/constants/RoleConstant');
const Logout = require('../auth/Logout');

module.exports = (app) => {
    app.post('/api/token/check', (req, res) => {
        const { AToken, RToken } = req.cookies;

        if (!RToken) return res.status(401).json({ message: 'Требуется авторизация' });

        jwt.verify(AToken, process.env.SECRET_KEY, (error, decode) => {
            if (error) {
                jwt.verify(RToken, process.env.SECRET_KEY, (err, dec) => {
                    if (err) {
                        if (err.message === 'jwt expired') {
                            Logout(app);
                            return res.status(401).json({
                                message: 'Требуется авторизация',
                            });
                        } else {
                            return res.status(406).json({
                                message:
                                    'Произошла ошибка с refresh токеном. Требуется повторная авторизация' +
                                    err,
                            });
                        }
                    }

                    const accessToken = GenerateTokens.accessToken(
                        dec.id,
                        dec.name,
                        dec.email,
                        dec.role_id,
                        dec.createAt
                    );
                    res.cookie('AToken', accessToken, { httpOnly: true });
                    return res.status(200).send({
                        id: dec.id,
                        name: dec.name,
                        email: dec.email,
                        role: ROLE_NAMES[dec.role_id],
                        createAt: dec.createAt,
                    });
                });
            }

            setTimeout(() => {
                if (decode) {
                    return res.status(200).send({
                        id: decode.id,
                        name: decode.name,
                        email: decode.email,
                        role: ROLE_NAMES[decode.role_id],
                        createAt: decode.createAt,
                    });
                }
            });
        });
    });
};
