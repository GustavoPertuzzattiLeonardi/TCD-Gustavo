
module.exports = (sequelize, DataType) => sequelize.define('piquete', {
  user: {
    type: DataType.INTEGER,
    allowNull: true
  },
  piquete: {
    type: DataType.INTEGER,
    allowNull: true
  },
  capacidade: {
    type: DataType.INTEGER,
    allowNull: true
  },  
  text: {
    type: DataType.STRING,
  }
})