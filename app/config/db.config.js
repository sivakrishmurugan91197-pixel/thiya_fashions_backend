require('dotenv').config();

let host = process.env.DB_HOST || "127.0.0.1";
let user = process.env.DB_USER || "root";
let password = process.env.DB_PASSWORD || "";
let dbName = process.env.DB_NAME || "thiyafashions";
let port = process.env.DB_PORT || 3306;

if (process.env.DATABASE_URL) {
    try {
        const url = new URL(process.env.DATABASE_URL);
        host = url.hostname;
        port = url.port || 3306;
        user = url.username;
        password = url.password;
        dbName = url.pathname.replace(/^\//, "");
    } catch (e) {
        console.error("Failed to parse DATABASE_URL:", e.message);
    }
}

module.exports = {
    HOST: host,
    USER: user,
    PASSWORD: password,
    DB: dbName,
    PORT: port,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
        timeout: 10000
    }
};
