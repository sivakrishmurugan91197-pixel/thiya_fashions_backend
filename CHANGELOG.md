# Backend Changelog - Thiya Fashions Backend

All changes made to clean up, configure, and optimize the backend service are documented below.

## [1.1.0] - 2026-08-02

### Added
- Created database URL parsing logic in `app/config/db.config.js` to automatically extract database host, port, username, password, and database name from `DATABASE_URL` environment variable (for Railway compatibility).
- Added `PORT` variable passing to `Sequelize` instance setup in `app/models/index.js` to support custom port configurations in production.
- Added `require('dotenv').config()` loader to the top of `server.js` to guarantee environment variables are loaded on boot.
- Added `DATABASE_URL` connection parameter to local `.env` pointing to target production MySQL database.

### Changed
- Refactored `server.js` to remove imports and router configurations related to the unused Doctorshield (`dsthai`) project.
- Updated root endpoint (`/`) response welcome message to `"Welcome to Thiya Fashions application."`.
- Modified `app/controllers/thiya.controller.js` to resolve image upload URLs dynamically using `x-forwarded-host` and `x-forwarded-proto` request headers instead of hardcoding `http://localhost:3000`.

### Removed
- Deleted missing and broken Doctorshield routes (`app/routes/index.js`).
- Deleted unused middleware files:
  - `app/middleware/auth.middleware.js`
  - `app/middleware/calculate.middleware.js`
  - `app/middleware/promoAuth.middleware.js`
  - `app/middleware/upload.middleware.js`
- Deleted unused Crypto controller (`app/controllers/Crypto.js`).
- Removed heavy, unused native dependencies (`@pdftron/pdfnet-node` and `html-pdf`) from `package.json` to prevent cloud container build/deployment crashes.
