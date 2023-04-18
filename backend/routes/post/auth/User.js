const sequelize = require("../../../app/db/db");
const { QueryTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const GenerateTokens = require("../../../app/utilities/tokens/GenerateTokens");

const { ROLE_NAMES } = require("../../../app/constants/RoleConstant");

module.exports = (app) => {
  app.post("/api/post/auth/user", async (req, res) => {
    try {
      const { email, password } = req.body;

      const candidate = await sequelize.query(
        `SELECT * FROM users WHERE email = '${email}'`,
        { type: QueryTypes.SELECT }
      );

      if (!candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с такой почтой не найден" });
      }

      const validPassword = bcrypt.compareSync(password, candidate.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Введен не верный пароль" });
      }

      const accessToken = GenerateTokens.accessToken(
        candidate.id,
        candidate.name,
        candidate.email,
        candidate.createAt,
        candidate.role_id,
        candidate.ticket
      );
      const refreshToken = GenerateTokens.refreshToken(
        candidate.id,
        candidate.name,
        candidate.email,
        candidate.createAt,
        candidate.role_id,
        candidate.ticket
      );
      res.cookie("AToken", accessToken, { httpOnly: true });
      res.cookie("RToken", refreshToken, { httpOnly: true });

      return res.send({
        id: candidate.id,
        name: candidate.name,
        email: candidate.email,
        createAt: candidate.createAt,
        role: ROLE_NAMES[candidate.role_id],
        ticket: candidate.ticket,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Auth error" });
    }
  });
};
