module.exports = (sequelize, Sequelize) => {
    const ThiyaCategory = sequelize.define("thiya_categories", {
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
        menu: {
            type: Sequelize.ENUM('men', 'women', 'kids'),
            allowNull: false,
            defaultValue: 'women'
        },
        size_status: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    });

    return ThiyaCategory;
};
