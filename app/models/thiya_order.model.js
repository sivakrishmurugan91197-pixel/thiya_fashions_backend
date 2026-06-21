module.exports = (sequelize, Sequelize) => {
    const ThiyaOrder = sequelize.define("thiya_orders", {
        customer_name: { type: Sequelize.STRING, allowNull: false },
        customer_email: { type: Sequelize.STRING, allowNull: false },
        phone: { type: Sequelize.STRING },
        alt_phone: { type: Sequelize.STRING },
        door_no: { type: Sequelize.STRING },
        street: { type: Sequelize.STRING },
        landmark: { type: Sequelize.STRING },
        city: { type: Sequelize.STRING },
        district: { type: Sequelize.STRING },
        pincode: { type: Sequelize.STRING },
        state: { type: Sequelize.STRING },
        quantity: { type: Sequelize.INTEGER, defaultValue: 1 },
        amount_paid: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
        gst_amount: { type: Sequelize.DECIMAL(10, 2), defaultValue: 0 },
        total_amount: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
        payment_status: { type: Sequelize.STRING, defaultValue: 'pending' },
        payment_id: { type: Sequelize.STRING },
        product_id: { type: Sequelize.INTEGER, allowNull: false }
    });

    return ThiyaOrder;
};
