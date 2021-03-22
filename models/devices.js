const connection = require('../database/connection');

class Device {
  async create(device, res) {
    const sql = 'INSERT INTO devices SET ?'

    await connection.query(sql, device, (erro, results) => {
      if (erro)
        res.json(erro);
      else {
        res.json(results);
      }
    })
  }

  async read(res) {
    const sql = 'SELECT devices.*, categories.name AS category_name FROM devices LEFT JOIN categories ON devices.category = categories.id ORDER BY devices.id'

    await connection.query(sql, (erro, results) => {
      if (erro)
        res.json(erro);
      else
        res.json(results);
    })
  }

  async delete(req, res) {
    const { id } = req.params;

    const sql = "DELETE FROM devices WHERE id = " + id + ";";

    await connection.query(sql, (error, results) => {
      if (error)
        res.json(error);
      else
        res.json(results);
    })
  }
}

module.exports = new Device