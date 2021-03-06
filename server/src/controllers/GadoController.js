const { Gado } = require('../models');

module.exports = {
  /**
   *  GET localhost:3000/Gado - retorna todos os Gado que estão no banco de dados
   * @param {*} req 
   * @param {*} res 
   */
  async find(req, res) {
    try {
      const gado = await Gado.findAll();
      return res.send(gado);
    } catch (e) {
      console.error(e);
      return res.status(500).send({});
    }
  },

  /**
   * GET /Gado/:id - retorna um Gado com o id enviado por parametro
   * @param {*} req 
   * @param {*} res 
   */
  async findOne(req, res) {
    return res.send({});
  },

  /**
   * POST /Gado - recebe um json com dados de um Gado e cria o Gado
   * @param {*} req 
   * @param {*} res 
   */
  async create(req, res) {

    try {
      console.log(req.body);
      const gado = await Gado.create(req.body.gado);
      return res.status(201).send(gado);
    } catch(e) {
      console.error(e);
      res.status(500).send({});
    }
  },

  /**
   * PUT /Gado/:id - Atualiza um Gado com novas informações
   * @param {*} req 
   * @param {*} res 
   */
  async update(req, res) {
    return res.send({});
  },

  /**
   * DELETE /Gado/:id - Remove um Gado da base de dados
   * @param {*} req 
   * @param {*} res 
   */
  async delete(req, res) {
    return res.send({});
  }
}