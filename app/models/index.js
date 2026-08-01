const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
 
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    dialectOptions: { multipleStatements: true },
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.thiya_categories = require("./thiya_category.model.js")(sequelize, Sequelize);
db.thiya_products = require("./thiya_product.model.js")(sequelize, Sequelize);
db.thiya_orders = require("./thiya_order.model.js")(sequelize, Sequelize);

// Relations
db.thiya_orders.belongsTo(db.thiya_products, { foreignKey: 'product_id', as: 'product' });
db.thiya_products.hasMany(db.thiya_orders, { foreignKey: 'product_id', as: 'orders' });

db.thiya_products.belongsTo(db.thiya_categories, { foreignKey: 'category_id', as: 'category' });
db.thiya_categories.hasMany(db.thiya_products, { foreignKey: 'category_id', as: 'products' });
 
module.exports = db;

