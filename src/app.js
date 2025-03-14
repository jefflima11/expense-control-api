require('dotenv').config();
const express =  require('express');
const app = express();

app.use(express.json());

const expenseRoutes = require('./routes/expense-routes');
app.use('/api', expenseRoutes);

module.exports = app;