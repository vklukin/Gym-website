const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = class GenerateTokens {
  static accessToken(id, name, email, role_id, createAt, ticket = null) {
    const payload = {
      id,
      name,
      email,
      role_id,
      createAt,
      ticket,
    };

    return jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRE_ACCESS_TOKEN,
    });
  }

  static refreshToken(id, name, email, role_id, createAt, ticket = null) {
    const payload = {
      id,
      name,
      email,
      role_id,
      createAt,
      ticket,
    };

    return jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRE_REFRESH_TOKEN,
    });
  }
};
