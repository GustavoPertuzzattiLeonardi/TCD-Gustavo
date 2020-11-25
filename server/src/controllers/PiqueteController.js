const { Piquete } = require('../models');

module.exports = {
  /**
   *  GET localhost:3000/piquete - retorna todos os piquete que estão no banco de dados
   * @param {*} req 
   * @param {*} res 
   */
  async find(req, res) {
    try {
      const piquete = await Piquete.findAll();
      return res.send(piquete);
    } catch (e) {
      console.error(e);
      return res.status(500).send({});
    }
  },

  /**
   * GET /piquete/:id - retorna um Piquete com o id enviado por parametro
   * @param {*} req 
   * @param {*} res 
   */
  async findOne(req, res) {
    return res.send({});
  },

  /**
   * POST /piquete - recebe um json com dados de um Piquete e cria o Piquete
   * @param {*} req 
   * @param {*} res 
   */
  async create(req, res) {

    try {
      console.log(req.body);
      const piquete = await Piquete.create(req.body.piquete);
      return res.status(201).send(piquete);
    } catch(e) {
      console.error(e);
      res.status(500).send({});
    }
  },

  /**
   * PUT /piquete/:id - Atualiza um Piquete com novas informações
   * @param {*} req 
   * @param {*} res 
   */
  async update(req, res) {
    return res.send({});
  },

  /**
   * DELETE /piquete/:id - Remove um Piquete da base de dados
   * @param {*} req 
   * @param {*} res 
   */
  async delete(req, res) {
    return res.send({});
  }
}