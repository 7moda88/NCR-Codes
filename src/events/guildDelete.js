const db = require("quick.db");

module.exports = async function (client, guild) {
  await db.delete(`prefix_${guild.id}`);
  await db.delete(`langguild_${guild.id}`);
};
