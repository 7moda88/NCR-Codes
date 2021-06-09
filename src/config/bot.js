require("dotenv").config();

module.exports = {
  prefix: "/",
  expressUrl: "ncr-codes.herokuapp.com",
  token: process.env.TOKEN,
  mongoPath: process.env.MONGOPATH
};
