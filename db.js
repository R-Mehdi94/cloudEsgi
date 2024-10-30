const { Sequelize } = require('sequelize')
import 'dotenv/config';

// Database
const sequelize = new Sequelize(
  process.env.BDDURL, // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
