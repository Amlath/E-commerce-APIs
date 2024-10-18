const Sequelize = require('sequelize');

const db_config = {
  user: 'productsampledb_user',
  password: '1234',
  host: 'localhost',
  port: 5432,
  database: 'ECommerceDB'
}

const sequelize = new Sequelize(db_config.database, db_config.user, db_config.password, {
  host: db_config.host,
  dialect: 'postgres'
});

sequelize.authenticate().then(() => {
  console.log("Connection has been established successfully");
  sequelize.sync().then((data) => {
    console.log("Models synced: ", data);
  }).catch((error) => {
    console.log("Models sync failed: ", error);
  })
}).catch((error) => {
  console.log("Unable to connect to database", error);
})

module.exports = sequelize;