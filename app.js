require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const reportRoutes = require('./routes/reportRoutes');
const userRoutes = require('./routes/userRoutes');
const roleRoutes = require('./routes/roleRoutes');
const { sequelize } = require('./config/database');
const models = require('./models');  // Import all models from models/index.js

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/reports', reportRoutes);
app.use('/api/users', userRoutes);
app.use('/api/roles', roleRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);

  try {
    await sequelize.authenticate();
    console.log("Database connection established successfully.");

    // Sync all models
    await sequelize.sync({ force: false });
    // await sequelize.sync({ alter: true });
    console.log("Models synced to the database.");

  } catch (error) {
    console.error("Error connecting to the database or syncing models:", error);
  }
});
