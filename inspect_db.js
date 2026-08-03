const db = require('./app/models');

async function inspect() {
    try {
        console.log("=== CONNECTING TO DB ===");
        const products = await db.thiya_products.findAll({ limit: 5 });
        console.log("=== PRODUCTS DATA ===");
        products.forEach(p => {
            console.log(`Product ID: ${p.id}`);
            console.log(`Title: ${p.title}`);
            console.log(`Raw Images Column: ${p.getDataValue('images')}`);
            console.log(`Parsed Images (Getter):`, p.images);
            console.log("------------------------");
        });

        const orders = await db.thiya_orders.findAll({ limit: 5 });
        console.log("=== ORDERS DATA ===");
        orders.forEach(o => {
            console.log(`Order ID: ${o.id}`);
            console.log(`Product ID: ${o.product_id}`);
            console.log(`Color: ${o.color}`);
            console.log(`Size: ${o.size}`);
            console.log("------------------------");
        });
        process.exit(0);
    } catch (e) {
        console.error("Error inspecting database:", e);
        process.exit(1);
    }
}

inspect();
