module.exports = (sequelize, Sequelize) => {
    const ThiyaProduct = sequelize.define("thiya_products", {
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT
        },
        price: {
            type: Sequelize.DECIMAL(10, 2),
            allowNull: false
        },
        discount_amount: {
            type: Sequelize.DECIMAL(10, 2),
            defaultValue: 0
        },
        size: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING,
            defaultValue: 'active' // active, inactive
        },
        images: {
            type: Sequelize.TEXT, // Storing JSON stringified array of objects {color: string, url: string}
            get() {
                const rawValue = this.getDataValue('images');
                if (!rawValue) return [];
                try {
                    const parsed = JSON.parse(rawValue);
                    if (Array.isArray(parsed)) {
                        return parsed.map(item => {
                            if (typeof item === 'string') {
                                return { color: 'default', url: item.startsWith('/uploads') ? `http://localhost:3000${item}` : item };
                            }
                            return {
                                color: item.color || 'default',
                                url: item.url.startsWith('/uploads') ? `http://localhost:3000${item.url}` : item.url
                            };
                        });
                    }
                    return [];
                } catch (e) {
                    return [];
                }
            },
            set(value) {
                this.setDataValue('images', JSON.stringify(value));
            }
        },
        category_id: {
            type: Sequelize.INTEGER,
            allowNull: true // Allow null for existing products without categories
        },
        colors: {
            type: Sequelize.TEXT, // Storing JSON stringified array of colors
            get() {
                const rawValue = this.getDataValue('colors');
                return rawValue ? JSON.parse(rawValue) : [];
            },
            set(value) {
                this.setDataValue('colors', JSON.stringify(value));
            }
        },
        details: {
            type: Sequelize.TEXT, // Storing JSON stringified key-value pairs
            get() {
                const rawValue = this.getDataValue('details');
                return rawValue ? JSON.parse(rawValue) : {};
            },
            set(value) {
                this.setDataValue('details', JSON.stringify(value));
            }
        },
        is_new_arrival: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        is_best_seller: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        is_trending: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        display_order: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 9999
        }
    });

    return ThiyaProduct;
};
