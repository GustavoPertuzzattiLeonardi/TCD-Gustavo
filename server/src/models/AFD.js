// Afazeres Diários

module.exports = (sequelize, DataType) => sequelize.define('afd', {
  user: {
    type: DataType.INTEGER,
    allowNull: true
  },
  text: {
    type: DataType.STRING,
  }
  // Ainda vou colocar mais campos, só não defini quais ainda.
})