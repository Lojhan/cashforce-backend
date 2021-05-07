
const env = require('./environment.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {
  users: require('./models/users.model.js')(sequelize, Sequelize),
  sponsors: require('./models/sponsors.model.js')(sequelize, Sequelize),
  providers: require('./models/providers.model.js')(sequelize, Sequelize),
  orders: require('./models/orders.model.js')(sequelize, Sequelize),
  buyers: require('./models/buyers.model.js')(sequelize, Sequelize),
}


db.orders.belongsTo(db.buyers, { foreignKey: 'buyerId' })
db.orders.belongsTo(db.providers, { foreignKey: 'providerId' })

module.exports = db


