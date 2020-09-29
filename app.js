const express = require('express');
const app = express();

const brotherRoutes = require('./api/routes/brothers');
const lineRoutes = require('./api/routes/lines');
const indexRoutes = require('./api/routes/index');

app.use('/lines', lineRoutes);
app.use('/brothers', brotherRoutes);
app.use('/', indexRoutes);

module.exports = app;