const express = require('express');
const app = express();

const brotherRoutes = require('./api/routes/brothers');
const lineRoutes = require('./api/routes/lines');

app.use('/lines', lineRoutes);
app.use('/brothers', brotherRoutes);

module.exports = app;