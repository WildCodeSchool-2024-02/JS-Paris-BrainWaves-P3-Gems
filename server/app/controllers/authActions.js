const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const tables = require("../../database/tables");

const login = async (req, res, next) => {
  try {
    const user = await tables.user.readByEmailWithPassword(req.body.mail);

    if (user == null) {
      res.sendStatus(422);
      return;
    }

    const verified = await argon2.verify(user.password, req.body.password);

    if (verified) {
      delete user.password;

      const token = await jwt.sign(
        { id: user.Id_user, isAdmin: user.is_admin },
        process.env.APP_SECRET,
        {
          expiresIn: "1h",
        }
      );
      const refreshToken = jwt.sign(
        { id: user.Id_user, isAdmin: user.is_admin },
        process.env.APP_SECRET,
        {
          expiresIn: "1d",
        }
      );

      res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        HttpOnly: true,
        sameSite: "lax",
        expires: new Date(Date.now()+900000000)
      })
      .header("Authorization", token)
      .json(user);
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

const refresh = async (req,res,next) => {
  try {
    const {refreshToken} = req.cookies;
    if(!refreshToken) {
      return res.status(401).send("Access Denied, No refesh token provided.");
    }
    const decoded = jwt.verify(refreshToken, process.env.APP_SECRET);
    const user = await tables.user.read(decoded.id);
    delete user.password;
    const accessToken = jwt.sign(
      { id: user.Id_user, isAdmin: user.is_admin },
      process.env.APP_SECRET,
      {
        expiresIn: "1h",
      }
    );
    return res.header("Authorization", accessToken).json(user);
  } catch (error) {
    return next (error);
  }
}

const logout = async ({ res }) => {
  res.clearCookie("refreshToken").sendStatus(200);
};

module.exports = {
  login,
  refresh,
  logout
};
