const connection = require('../database/connection');

class Device {
  create(device, res) {
    const sql = 'INSERT INTO devices SET ?'

    connection.query(sql, device, (erro, results) => {
      if (erro)
        res.json(erro);
      else {
        res.json(results);
      }
    })
  }

  read(res) {
    const sql = 'SELECT devices.*, categories.name AS category_name FROM devices LEFT JOIN categories ON devices.category = categories.id ORDER BY devices.id'

    connection.query(sql, (erro, results) => {
      if (erro)
        res.json(erro);
      else
        res.json(results);
    })
  }

  delete(req, res) {
    const { id } = req.params;

    const sql = "DELETE FROM device WHERE id = " + id;

    connection.query(sql, (error, results) => {
      if (error)
        res.json(error);
      else
        res.json(results);
    })
  }
}

module.exports = new Device