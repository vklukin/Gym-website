module.exports = (app) => {
  app.post("/auth/logout", (req, res) => {
    res.clearCookie("AToken", { path: "/" });
    res.clearCookie("RToken", { path: "/" });

    return res.sendStatus(200);
  });
};
