const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './instavue.db',
  logging: true 
});

sequelize.Piquete = sequelize.import('./Piquete.js');
sequelize.Gado    = sequelize.import('./Gado.js'   );
sequelize.AFD     = sequelize.import('./AFD.js'    );

sequelize.sync();

module.exports = sequelize;