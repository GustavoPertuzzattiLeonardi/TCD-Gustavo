const { Piquete } = require('../models');

module.exports = {
  /**
   *  GET localhost:3000/AFD - retorna todos os AFD que estão no banco de dados
   * @param {*} req 
   * @param {*} res 
   */
  async find(req, res) {
    try {
      const AFD = await Piquete.findAll();
      return res.send(AFD);
    } catch (e) {
      console.error(e);
      return res.status(500).send({});
    }
  },

  /**
   * GET /AFD/:id - retorna um piquete com o id enviado por parametro
   * @param {*} req 
   * @param {*} res 
   */
  async findOne(req, res) {
    return res.send({});
  },

  /**
   * POST /AFD - recebe um json com dados de um piquete e cria o piquete
   * @param {*} req 
   * @param {*} res 
   */
  async create(req, res) {

    try {
      console.log(req.body);
      const piquete = await Piquete.create(req.body);
      return res.status(201).send(piquete);
    } catch(e) {
      console.error(e);
      res.status(500).send({});
    }
  },

  /**
   * PUT /AFD/:id - Atualiza um piquete com novas informações
   * @param {*} req 
   * @param {*} res 
   */
  async update(req, res) {
    return res.send({});
  },

  /**
   * DELETE /AFD/:id - Remove um piquete da base de dados
   * @param {*} req 
   * @param {*} res 
   */
  async delete(req, res) {
    return res.send({});
  }
}