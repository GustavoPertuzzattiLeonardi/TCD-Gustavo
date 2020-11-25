
module.exports = (sequelize, DataType) => sequelize.define('gado', {
  user: {
    type: DataType.INTEGER,
    allowNull: true
  },
  codBrinc: {
    type: DataType.INTEGER,
    allowNull: true
  },
  peso: {
    type: DataType.INTEGER,
    allowNull: true
  },
  dtSaid: {
    type: DataType.INTEGER,
    allowNull: true
  },  
  text: {
    type: DataType.STRING,
  }
})