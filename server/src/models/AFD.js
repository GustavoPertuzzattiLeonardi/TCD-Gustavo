// Afazeres Diários

module.exports = (sequelize, DataType) => sequelize.define('afd', {
  user: {
    type: DataType.INTEGER,
    allowNull: true
  },
  PiqOri: {
    type: DataType.INTEGER,
    allowNull: true
  },  
  PiqDest: {
    type: DataType.INTEGER,
    allowNull: true
  },  
  text: {
    type: DataType.STRING,
  }
})