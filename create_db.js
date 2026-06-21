const mysql = require('mysql2/promise');
const dbConfig = require('./app/config/db.config.js');

async function initialize() {
    try {
        const connection = await mysql.createConnection({
            host: dbConfig.HOST,
            user: dbConfig.USER,
            password: dbConfig.PASSWORD
        });
        
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.DB}\`;`);
        console.log(`Database ${dbConfig.DB} created or successfully checked.`);
        process.exit(0);
    } catch (err) {
        console.error("Error creating database:", err);
        process.exit(1);
    }
}

initialize();
