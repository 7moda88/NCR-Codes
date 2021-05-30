const chalk = require("chalk");
const figlet = require("figlet");
const request = require("node-superfetch");
const db = require("quick.db");

module.exports = async client => {
  console.log(
    chalk.yellow(figlet.textSync("NCR Codes", { horizontalLayout: "full" }))
  );
  await console.log(
    chalk.red.bold(client.user.tag) + chalk.blue.bold(" Is Ready")
  );
  await client.user.setActivity("/help | NCR Codes ✨");
  await client.user.setStatus("idle");
  setInterval(async () => {
    var data = db.get("links");
    if (!data) return;
    var dataContent = data.map(data => data.url);
    dataContent.forEach(async link => {
      try {
        const { body } = await request.get(link);
        console.log(
          chalk.red.bold(link) + chalk.blue.bold(" Has Been Uptimed")
        );
      } catch (err) {
        console.log('Bad Reader')
      }
      console.log(link);
    });
  }, 1000 * 60);
};
