const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = class GenerateTokens {
  static accessToken(id, name, email, role_id, createAt, ...otherProps) {
    const payload = {
      id,
      name,
      email,
      role_id,
      createAt,
      ...otherProps,
    };

    return jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRE_ACCESS_TOKEN,
    });
  }

  static refreshToken(id, name, email, role_id, createAt, ...otherProps) {
    const payload = {
      id,
      name,
      email,
      role_id,
      createAt,
      ...otherProps,
    };

    return jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: process.env.EXPIRE_REFRESH_TOKEN,
    });
  }
};
