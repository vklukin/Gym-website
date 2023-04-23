const sequelize = require("../../../app/db/db").sequelize;
const { QueryTypes } = require("sequelize");
const bcrypt = require("bcrypt");

const GenerateTokens = require("../../../app/utilities/tokens/GenerateTokens");
const { ROLE_NAMES } = require("../../../app/constants/RoleConstant");

module.exports = (app) => {
  app.post("/api/post/auth/login", async (req, res) => {
    try {
      const { email, password } = req.body;
      let candidate;
      let ticket;

      await sequelize
        .query(`SELECT * FROM users WHERE email = '${email}'`, {
          type: QueryTypes.SELECT,
        })
        .then((data) => {
          candidate = data[0];
        });

      if (!candidate) {
        return res
          .status(400)
          .json({ message: "Пользователь с такой почтой не найден" });
      }

      const validPassword = bcrypt.compareSync(password, candidate.password);
      if (!validPassword) {
        return res.status(400).json({ message: "Введен не верный пароль" });
      }

      if (candidate.ticket_id) {
        await sequelize
          .query(`SELECT * FROM ticket WHERE id = '${candidate.ticket_id}'`, {
            type: QueryTypes.SELECT,
          })
          .then((data) => {
            ticket = data[0];
          });
      }

      const accessToken = GenerateTokens.accessToken(
        candidate.id,
        candidate.name,
        candidate.email,
        candidate.role_id,
        candidate.createAt,
      );
      const refreshToken = GenerateTokens.refreshToken(
        candidate.id,
        candidate.name,
        candidate.email,
        candidate.role_id,
        candidate.createAt,
      );
      res.cookie("AToken", accessToken, { httpOnly: true });
      res.cookie("RToken", refreshToken, { httpOnly: true });

      return res.send({
        id: candidate.id,
        name: candidate.name,
        email: candidate.email,
        role: ROLE_NAMES[candidate.role_id],
        createAt: candidate.createAt,
        ticket: ticket
          ? {
              ticket_id: ticket.ticket_id,
              ticket_rate: ticket.ticket_rate,
              start_period: ticket.start_period,
              end_period: ticket.end_period,
            }
          : null,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Auth error" });
    }
  });
};
