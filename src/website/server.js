const http = require("http");
const express = require("express");
const app = express();
const chalk = require("chalk");
const cookies = require("cookies");
const rootRoutes = require("./routes/root-routes");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.set("views", __dirname + "/views");
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(cookies.express("a", "b", "c"));

app.use(cookies.express("a", "b", "c"));

app.use(express.static(`${__dirname}/assets`));
app.locals.basedir = `${__dirname}/assets`;

app.use("/", rootRoutes);

app.get("*", (req, res) => {
  res.render("errors/404");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(chalk.red.bold("Server Is On")));

setInterval(() => {
  http.get(`http://ncr-codes.glitch.me/`);
}, 280000);

const request = require("node-superfetch");
setInterval(async () => {
  await request.get("http://ncr-codes.glitch.me/");
  await request.get("https://ncr-codes.glitch.me/");
}, 5 * 60 * 1000);
