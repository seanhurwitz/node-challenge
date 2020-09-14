const db = require("../connect/mySqlConnect");

const createSite = async (
  name1,
  reference1,
  name2,
  reference2,
  name3,
  reference3
) => {
  const instructions = "INSERT INTO Site1 (Name, Reference) VALUES ?";
  const siteValues = [
    [name1, reference1],
    [name2, reference2],
    [name3, reference3],
  ];

  try {
    await db.promise().query("USE DB1");
    const site = await db.promise().query(instructions, [siteValues]);
    return "site table created!";
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = createSite;
