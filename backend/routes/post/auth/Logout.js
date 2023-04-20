module.exports = (app) => {
  app.post("/api/post/auth/logout", (req, res) => {
    res.clearCookie("AToken", { path: "/" });
    res.clearCookie("RToken", { path: "/" });

    return res.sendStatus(200);
  });
};
