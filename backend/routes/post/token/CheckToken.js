const jwt = require("jsonwebtoken");
require("dotenv").config();

const GenerateTokens = require("../../../app/utilities/tokens/GenerateTokens");
const { ROLE_NAMES } = require("../../../app/constants/RoleConstant");

module.exports = (app) => {
  app.post("/api/token/check", (req, res) => {
    const { AToken, RToken } = req.cookies;

    if (!RToken)
      return res.status(401).json({ message: "Требуется авторизация" });

    jwt.verify(AToken, process.env.SECRET_KEY, (error, decode) => {
      if (error) {
        if (error.message === "jwt expired") {
          jwt.verify(RToken, process.env.SECRET_KEY, (err, dec) => {
            if (err) {
              if (err.message === "jwt expired") {
                return res.status(401).json({
                  message: "Требуется авторизация",
                });
              } else {
                return res.status(406).json({
                  message:
                    "Произошла ошибка с refresh токеном. Требуется повторная авторизация" +
                    err,
                });
              }
            }

            const accessToken = GenerateTokens.accessToken(
              dec.id,
              dec.name,
              dec.email,
              dec.createAt,
              dec.role_id,
              dec.ticket
            );
            res.cookie("AToken", accessToken, { httpOnly: true });
            return res.status(200).send({
              id: dec.id,
              name: dec.name,
              email: dec.email,
              createAt: dec.createAt,
              role: ROLE_NAMES[dec.role_id],
              ticket: dec.ticket,
            });
          });
        } else {
          return res.status(406).json({
            message:
              "Произошла ошибка с access токеном. Требуется повторная авторизация" +
              error,
          });
        }
      }

      setTimeout(() => {
        if (decode) {
          return res.status(200).send({
            id: decode.id,
            name: decode.name,
            email: decode.email,
            createAt: decode.createAt,
            role: ROLE_NAMES[decode.role_id],
            ticket: decode.ticket,
          });
        }
      });
    });
  });
};
