const chalk = require("chalk");
const db = require("../connect/mySqlConnect");

const deleteOrg = async (entryToDelete) => {
  const instructionsDB = "USE DB1";
  const instructions1 =
    "DELETE FROM Org1 WHERE name = " + "'" + entryToDelete + "'";

  try {
    await db.promise().query(instructionsDB);
    const update1 = await db.promise().query(instructions1);

    if (update1[0].affectedRows > 0) {
      console.log(chalk.red("Entry deleted from Org table"));
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = deleteOrg;
