require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const thiyaRoutes = require('./app/routes/thiya.routes');

const path = require('path');

const app = express();

app.use(helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
}));
app.use(cors());
app.use(express.json());
// Serve uploaded files statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100
});
app.use(limiter);

app.use('/api/thiya', thiyaRoutes);
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Thiya Fashions application." });
});
app.get("/api/thiya/debug-path", (req, res) => {
    const path = require('path');
    res.json({
        __dirname,
        cwd: process.cwd(),
        uploads_resolved: path.join(__dirname, 'uploads')
    });
});

app.use((err, req, res, next) => {
    console.error('Unhandled error', { error: err.message });
    res.status(500).json({
        is_success: false,
        data: null,
        message: 'Internal Server Error'
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;