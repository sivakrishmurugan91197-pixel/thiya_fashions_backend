module.exports = (sequelize, Sequelize) => {
    const ThiyaFeedback = sequelize.define("thiya_feedbacks", {
        image_url: {
            type: Sequelize.STRING,
            allowNull: false
        },
        customer_name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        rating: {
            type: Sequelize.INTEGER,
            allowNull: true,
            defaultValue: 5
        },
        comment: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });

    return ThiyaFeedback;
};
