module.exports = (sequelize, Sequelize) => {
    const ThiyaVideoBanner = sequelize.define("thiya_video_banners", {
        title: {
            type: Sequelize.STRING,
            allowNull: true
        },
        subtitle: {
            type: Sequelize.STRING,
            allowNull: true
        },
        image_url: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    });

    return ThiyaVideoBanner;
};
