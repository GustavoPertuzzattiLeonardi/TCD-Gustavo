const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './gustavo.db',
  logging: true // se verdadeiro, vai logar as queries SQL no terminal durante a execução
});

sequelize.CadastroUser = sequelize.import('./CadastroUser.js');
sequelize.Piquete = sequelize.import('./Piquete.js');
sequelize.Gado    = sequelize.import('./Gado.js'   );
sequelize.AFD     = sequelize.import('./AFD.js'    );

sequelize.sync();

module.exports = sequelize;