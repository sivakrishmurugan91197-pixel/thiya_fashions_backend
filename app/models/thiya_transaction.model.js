module.exports = (sequelize, Sequelize) => {
    const ThiyaTransaction = sequelize.define("thiya_transaction", {
        razorpay_order_id: {
            type: Sequelize.STRING,
            allowNull: false
        },
        razorpay_payment_id: {
            type: Sequelize.STRING
        },
        razorpay_signature: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        customer_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        customer_email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phone: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.STRING,
            defaultValue: 'pending' // pending, completed, failed
        }
    }, {
        tableName: 'tbl_transaction'
    });

    return ThiyaTransaction;
};
