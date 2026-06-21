const db = require('./app/models');

db.sequelize.sync({ alter: true })
  .then(() => {
    console.log("Synced db.");
    process.exit(0);
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
    process.exit(1);
  });
