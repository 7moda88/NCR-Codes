const http = require("http");
const express = require("express");
const app = express();
const chalk = require("chalk");
const rootRoutes = require("./routes/root-routes");
const expressUrl = require("../config/bot").expressUrl;
app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.use("/", rootRoutes);

app.get("*", (req, res) => {
  res.render("errors/404");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(chalk.red.bold("Server Is On")));

setInterval(() => {
  http.get(`http://${expressUrl}`);
}, 280000);

const request = require("node-superfetch");
setInterval(async () => {
  await request.get(`http://${expressUrl}`);
  await request.get(`https://${expressUrl}`);
}, 5 * 60 * 1000);

// niro is here :>
